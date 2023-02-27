<template>
	<nav
		class="bottom-0 px-3 py-3 flex justify-center items-center border-b-[1px] border-border_sm fixed w-full bg-navbar_back backdrop-blur-sm sm:top-0 sm:bottom-auto sm:px-6 lg:py-4">
		<div class="h-[1px] top-0 absolute w-full bg-topbar lg:h-1"></div>

		<div class="flex text-sm items-center gap-1 sm:gap-2">
			<NavbarItem to="/">
				Home
			</NavbarItem>
			<NavbarItem to="/about">
				About
			</NavbarItem>
			<NavbarItem to="/projects">
				Projects
			</NavbarItem>
			<NavbarItem to="/policies">
				Data & Privacy
			</NavbarItem>

		</div>
	</nav>
</template>
<style scoped>
.router-link-exact-active {
	color: rgb(45 212 191)
}
</style>
