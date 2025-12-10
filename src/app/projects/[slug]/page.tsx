import { getProjectBySlug } from "@/app/components/landingpage/projectData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Separator } from '../../components/ui/separator';
import { ArrowLeft, Globe, Code } from "lucide-react";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen w-full text-stone-900 font-sans selection:bg-stone-100 pt-24">
            <div className="max-w-5xl mx-auto px-6 pb-20">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-600 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 hover:text-stone-900 transition-colors mb-12"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Projects
                </Link>

                {/* Hero Image */}
                <div className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Tags Row */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    {/* Status Tag */}
                    <span className={`px-3 py-1.5 text-sm font-medium rounded-full ${project.isWorking
                        ? "bg-stone-900 text-white"
                        : "bg-stone-100 text-stone-600"
                        }`}>
                        {project.isWorking ? "Completed" : "Not Completed"}
                    </span>

                    {/* Tech Tags */}
                    {project.tech.slice(0, 5).map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200 text-sm text-stone-700 shadow-sm"
                        >
                            {tech.icon}
                            <span>{tech.name}</span>
                        </div>
                    ))}
                    {project.tech.length > 5 && (
                        <div className="px-3 py-1.5 rounded-full bg-white border border-stone-200 text-sm text-stone-500 shadow-sm">
                            +{project.tech.length - 5} more
                        </div>
                    )}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-stone-900 tracking-tight">
                    {project.title}
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-12 max-w-3xl">
                    {project.description}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white border border-stone-200 rounded-2xl shadow-sm mb-12">
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-stone-500">Timeline</h3>
                        <p className="text-base font-semibold text-stone-900">{project.timeline || "TBD"}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-stone-500">Role</h3>
                        <p className="text-base font-semibold text-stone-900">{project.role || "Full Stack Developer"}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-stone-500">Team</h3>
                        <p className="text-base font-semibold text-stone-900">{project.team || "Solo"}</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-sm font-medium text-stone-500">Status</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${project.isWorking
                            ? "bg-stone-900 text-white"
                            : "bg-stone-100 text-stone-600"
                            }`}>
                            {project.isWorking ? "Completed" : "Not Completed"}
                        </span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10"
                    >
                        <Globe className="w-5 h-5 mr-2" />
                        Live Demo
                    </a>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-white text-stone-900 rounded-xl font-medium hover:bg-stone-50 transition-colors border border-stone-200 shadow-sm"
                    >
                        <Code className="w-5 h-5 mr-2" />
                        Source Code
                    </a>
                </div>

                <Separator orientation="horizontal" />

                <div className="flex flex-col gap-16 mt-24 items-start w-full">
                    {/* Header with Tagline */}
                    <div className="font-logo items-center text-4xl font-bold text-stone-900">
                        {project.title} : <span className="text-stone-600 font-medium">{project.tagline}</span>
                    </div>

                    {/* What Users Can Do */}
                    {project.features && (
                        <div className="w-full space-y-6">
                            <h2 className="text-3xl font-bold text-stone-900">What Users Can Do</h2>
                            <ul className="space-y-4">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                                        <p className="text-lg text-stone-600">
                                            <span className="font-semibold text-stone-900">{feature.title}:</span> {feature.description}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Why I Built This */}
                    {project.motivation && (
                        <div className="w-full space-y-6">
                            <h2 className="text-3xl font-bold text-stone-900">{project.motivation.title}</h2>
                            <p className="text-lg text-stone-600 leading-relaxed">
                                {project.motivation.description}
                            </p>
                            <ul className="space-y-4">
                                {project.motivation.points.map((point, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                                        <p className="text-lg text-stone-600">{point}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tech Stack */}
                    <div className="w-full space-y-6">
                        <h2 className="text-3xl font-bold text-stone-900">Tech Stack</h2>
                        <ul className="space-y-3">
                            {project.tech.map((tech, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                                    <span className="text-lg text-stone-600">{tech.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
}
