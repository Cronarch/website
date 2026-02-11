const members = [
    {
        avatar: '/caleb-square.png',
        name: 'Caleb Brown',
        role: 'Founder, Software Engineer',
    },
]

export default function Team() {
    return (
        <section id="team" className="bg-background @container py-32 scroll-mt-24">
            <div className="mx-auto max-w-4xl px-6">
                <div className="space-y-6">
                    <h2 className="text-balance font-serif text-5xl font-medium sm:text-6xl">Meet Our Team</h2>
                    <p className="text-muted-foreground text-balance text-lg">The people behind our mission to transform how your business works and collaborates.</p>
                </div>
                <div className="@xl:grid-cols-3 @xl:gap-8 @xl:gap-16 mt-20 grid grid-cols-2 gap-6 gap-y-10 text-base">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-6">
                            <div className="before:border-foreground/10 shadow-foreground/6.5 dark:shadow-black/6.5 relative size-40 shrink-0 rounded-2xl shadow-md before:absolute before:inset-0 before:rounded-2xl before:border sm:size-48">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="rounded-2xl object-cover"
                                    width={192}
                                    height={192}
                                />
                            </div>

                            <div className="space-y-2">
                                <p className="text-foreground text-lg font-medium">{member.name}</p>
                                <p className="text-muted-foreground text-base">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
