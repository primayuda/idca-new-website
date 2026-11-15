import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MemberCard({
	href,
	title,
	regions,
	type,
	imageSrc,
	imageAlt,
	view,
}: {
	href: string;
	title: string;
	regions: string;
	type: string;
	imageSrc?: string;
	imageAlt?: string;
	view: string;
}) {
	return (
		<a href={href} className="group block h-full">
			<Card className="h-full gap-0 py-0">
				{imageSrc ? (
					<img src={imageSrc} alt={imageAlt ?? ""} className="aspect-[16/10] w-full bg-card object-contain" />
				) : (
					<div className="aspect-[16/10] bg-muted" />
				)}
				<CardHeader>
					<CardTitle className="font-display text-2xl leading-tight group-hover:text-primary">{title}</CardTitle>
					{regions ? <CardDescription className="font-medium text-primary">{regions}</CardDescription> : null}
					{type ? <CardDescription>{type}</CardDescription> : null}
					<p className="pt-2 text-sm font-semibold text-foreground">{view}</p>
				</CardHeader>
			</Card>
		</a>
	);
}
