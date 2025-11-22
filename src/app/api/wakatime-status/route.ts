// app/api/wakatime-status/route.ts
import { NextResponse } from 'next/server';

const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;

export async function GET() {
  try {
    // Create Basic Auth header
    const authHeader = 'Basic ' + Buffer.from(WAKATIME_API_KEY + ':').toString('base64');
    
    // Get all time logged today
    const statsResponse = await fetch(
      'https://wakatime.com/api/v1/users/current/summaries?range=Today',
      {
        headers: {
          'Authorization': authHeader
        },
        next: { revalidate: 60 }
      }
    );

    if (!statsResponse.ok) {
      const errorText = await statsResponse.text();
      console.error('WakaTime API Error:', statsResponse.status, errorText);
      throw new Error(`Failed to fetch WakaTime stats: ${statsResponse.status}`);
    }

    const statsData = await statsResponse.json();
    const todaySummary = statsData.data?.[0];
    
    if (!todaySummary) {
      return NextResponse.json({
        isOnline: false,
        duration: 0,
        lastSeen: null,
        lastSessionDuration: 0
      });
    }

    // Get total seconds coded today
    const todayDuration = todaySummary.grand_total?.total_seconds || 0;
    
    // Check if currently coding (has activity in last 2 minutes)
    const lastHeartbeatAt = todaySummary.range?.end;
    const lastHeartbeatTime = lastHeartbeatAt ? new Date(lastHeartbeatAt).getTime() : null;
    const currentTime = Date.now();
    const isOnline = lastHeartbeatTime 
      ? (currentTime - lastHeartbeatTime) < 120000 
      : false;

    // Get last editor/project for session info
    const editors = todaySummary.editors || [];
    const lastEditor = editors[0];
    
    // If offline, try to get duration from most recent editor session
    let lastSessionDuration = 0;
    if (!isOnline && lastEditor) {
      lastSessionDuration = lastEditor.total_seconds || 0;
    }

    return NextResponse.json({
      isOnline,
      duration: todayDuration,
      lastSeen: lastHeartbeatTime,
      lastSessionDuration: isOnline ? 0 : lastSessionDuration
    });
    
  } catch (error) {
    console.error('WakaTime API error:', error);
    return NextResponse.json(
      { 
        isOnline: false, 
        duration: 0, 
        lastSeen: null,
        lastSessionDuration: 0
      },
      { status: 200 }
    );
  }
}