const techList = [
	{
		id: crypto.randomUUID(),
		nr: "01",
		title: "Reviving Retro PCs",
		description: "What happens when old PCs are given modern upgrades?",
		image: "/images/image-retro-pcs.jpg",
	},
	{
		id: crypto.randomUUID(),
		nr: "02",
		title: "Top 10 Laptops of 2022",
		description: "Our best picks for various needs and budgets.",
		image: "/images/image-top-laptops.jpg",
	},
	{
		id: crypto.randomUUID(),
		nr: "03",
		title: "The Growth of Gaming",
		description: "How the pandemic has sparked fresh opportunities.",
		image: "/images/image-gaming-growth.jpg",
	},
];

function TechList() {
	return (
		<>
			{techList.map((item) => (
				<li key={item.id} className="flex mb-8">
					<img src={item.image} alt="" className="size-32" />
					<div className="flex flex-col gap-2 pl-8">
						<h2 className="text-3xl font-bold text-neutral-grayishBlue">
							{item.nr}
						</h2>
						<h3 className="hover:cursor-pointer hover:text-primary-softRed text-[18px] font-bold text-neutral-veryDarkBlue">
							{item.title}
						</h3>
						<p className="text-sm leading-6 text-neutral-darkGrayishBlue">
							{item.description}
						</p>
					</div>
				</li>
			))}
		</>
	);
}
export default TechList;
