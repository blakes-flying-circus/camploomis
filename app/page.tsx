import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import styles from '../styles/App.module.css';

export default function Home() {
	return (
		<div 
			className={styles.pageHeader}
			style={{backgroundImage: "url(/img/beerhome.png)"}}
		>
			Here
			<div className="filter" />
			<div className={styles.contentCenter}>
				<Image 
					src="/img/camploomisLogoHero.png"
					alt="logo" 
				/>
			</div>
			<div
          className="moving-clouds"
          style={{
            backgroundImage: "url(/img/clouds.png)"
          }}
        />
		</div>
		// <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
		// 	<div className="inline-block max-w-lg text-center justify-center">
		// 		<h1 className={title()}>Make&nbsp;</h1>
		// 		<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
		// 		<br />
		// 		<h1 className={title()}>
		// 			websites regardless of your design experience.
		// 		</h1>
		// 		<h2 className={subtitle({ class: "mt-4" })}>
		// 			Beautiful, fast and modern React UI library.
		// 		</h2>
		// 	</div>

		// 	<div className="flex gap-3">
		// 		<Link
		// 			isExternal
		// 			as={NextLink}
		// 			href={siteConfig.links.docs}
		// 			className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
		// 		>
		// 			Documentation
		// 		</Link>
		// 		<Link
		// 			isExternal
		// 			as={NextLink}
		// 			className={buttonStyles({ variant: "bordered", radius: "full" })}
		// 			href={siteConfig.links.github}
		// 		>
		// 			<GithubIcon size={20} />
		// 			GitHub
		// 		</Link>
		// 	</div>

		// 	<div className="mt-8">
		// 		<Snippet hideSymbol hideCopyButton variant="flat">
		// 			<span>
		// 				Get started by editing <Code color="primary">app/page.tsx</Code>
		// 			</span>
		// 		</Snippet>
		// 	</div>
		// </section>
	);
}
