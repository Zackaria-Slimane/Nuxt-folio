import { h } from "vue"

export default (props, context) => h("a",
	{
		class: "bg-sky-400 hover:bg-sky-600  border-[1px] border-link_border px-2 py-2" +
			" rounded-md font-theme_bold text-white text-sm hover:bg-border_sm transition-colors md:px-4 " +
			"slg:text-base slg:px-6 slg:py-3 w-fit",
		href: props.link,
		target: '_blank'
	},
	context.slots.default()
)
