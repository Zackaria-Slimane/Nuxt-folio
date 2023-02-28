<template>
	<nav
		class="top-0 px-3 py-3 flex justify-between items-center border-b-[1px] border-border_sm fixed w-full bg-navbar_back backdrop-blur-sm sm:top-0 sm:bottom-auto sm:px-6 lg:py-4">
		<div class="h-[1px] top-0 absolute left-0 w-full bg-topbar lg:h-1"></div>
		<NuxtLink class="zs text-xl font-normal select-none slg:font-semibold lg:text-4xl" to="/">
			Zackaria Slimane
		</NuxtLink>
		<div class="flex text-sm sm:text-mobile items-center gap-1 sm:gap-2 navtext">
			<NavbarItem to="/">
				Home
			</NavbarItem>
			<NavbarItem to="/about">
				About
			</NavbarItem>
			<NavbarItem to="/projects">
				Projects
			</NavbarItem>
			<NavbarItem to="/contact">
				Contact
			</NavbarItem>

		</div>
	</nav>
</template>

<style scoped>
@media only screen and (max-width: 660px) {
	.navtext {
		font-size: 0.625em;
	}
}

.router-link-exact-active {
	color: rgb(250 204 21);
}

.zs {
	font-family: 'DarlingtonDemo';
	font-weight: 200;
	color: white;
}
</style>
