const menu = [
	{
		id: 1,
		title: "Home",
	},
	{
		id: 2,
		title: "New",
	},
	{
		id: 3,
		title: "Popular",
	},
	{
		id: 4,
		title: "Trending",
	},
	{
		id: 5,
		title: "Categories",
	},
];

function MenuList() {
	return (
		<ul className="flex flex-col gap-6 pt-20 pl-8 md:flex md:flex-row">
			{menu.map((item) => (
				<li
					key={item.id}
					className="text-xl md:cursor-pointer md:hover:text-primary-softOrange text-neutral-veryDarkBlue"
				>
					{item.title}
				</li>
			))}
		</ul>
	);
}
export default MenuList;
