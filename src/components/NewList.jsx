const list = [
	{
		id: crypto.randomUUID(),
		title: "Hydrogen VS Electric Cars",
		description: "Will hydrogen-fueled cars ever catch up to EVs?",
	},
	{
		id: crypto.randomUUID(),
		title: "The Downsides of AI Artistry",
		description:
			"What are the possible adverse effects of on-demand AI image generation?",
	},
	{
		id: crypto.randomUUID(),
		title: "Is VC Funding Drying Up?",
		description:
			"Private funding by VC firms is down 50% YOY. We take a look at what that means.",
	},
];

function NewList() {
	return (
		<ul className=" divide-neutral-darkGrayishBlue divide-y-2 divide-solid w-[300px] pl-5">
			{list.map((item) => (
				<li key={item.id}>
					<h3 className="pt-6 text-lg font-bold hover:cursor-pointer hover:text-primary-softOrange text-neutral-offWhite">
						{item.title}
					</h3>
					<p className="pt-3 pb-8 text-sm text-neutral-grayishBlue">
						{item.description}
					</p>
				</li>
			))}
		</ul>
	);
}
export default NewList;
