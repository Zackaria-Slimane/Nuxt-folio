<template>
	<nav
		class="top-0 px-2 py-3 flex justify-between items-center border-b-[1px] border-border_sm fixed w-full bg-white backdrop-blur-sm sm:top-0 sm:bottom-auto sm:px-6 lg:py-4 dark:bg-navbar_back">
		<div class="h-[1px] top-0 absolute left-0 w-full bg-topbar lg:h-1"></div>
		<NuxtLink class="zs text-lg text-background dark:text-white font-normal select-none slg:font-semibold lg:text-4xl" to="/">
			Zackaria Slimane
		</NuxtLink>
		<div class="flex sm:text-sm text-mobile items-center gap-1 sm:gap-2 navtext text-background dark:text-white">
			<NavbarItem class="hidden sm:inline-block" to="/">
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
			     <button class="ml-5" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
              <svg
                v-if="$colorMode.value == 'dark'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-50"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
              </svg>
            </button>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { useThemeStore } from '~~/store/themeStore';

onMounted(()=>{
	useColorMode().preference = 'dark'
	setBodyColor(useColorMode().preference)
})

const useTheme = useThemeStore()
type Theme = 'light' | 'dark';
const setColorTheme = (newTheme: Theme) => {
	useColorMode().preference = newTheme
	useTheme.setTheme(newTheme)
	setBodyColor(newTheme)
}

function setBodyColor(theme :String){
if (theme  === 'light') {
		document.body.style.background = 'whitesmoke'
}
if (theme  === 'dark') {
		document.body.style.background = '#151922'
}
}
</script>

<style scoped>
@media only screen and (max-width: 660px) {	.navtext {
		font-size: 0.625em;
	}
}

.router-link-exact-active {
	color: rgb(10, 152, 218);
}

.zs {
	font-family: 'DarlingtonDemo';
	font-weight: 200;
}
</style>
