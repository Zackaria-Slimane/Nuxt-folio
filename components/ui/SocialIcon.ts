import { h } from "vue";
import { Icon } from "@iconify/vue";

export default (props, context) => {
	const { link, title, icon } = props;
	return h('a', { href: link, title },
		h(Icon, { icon, target: '_blank', class: "text-p_text rounded-md hover:bg-border_sm p-2 transition-all h-[50px] w-[40px] sm:w-[50px]" })
	)
}
