<template>
  <div>
    <header
      class="
        sticky
        top-0
        z-40
        h-16
        w-full
        border-b border-b-indigo-100
        bg-gray-100
        px-3
      "
    >
      <div class="flex h-full w-full items-center justify-between">
        <div class="flex items-center">
          <HomeIcon class="w-8 fill-indigo-500" />
          <span class="font-semibold">Estatery</span>
        </div>
        <div class="lg:hidden">
          <MenuIcon class="w-8 cursor-pointer" @click="MenuOpen = !MenuOpen" />
        </div>
        <nav
          class="
            absolute
            left-0
            top-16
            w-full
            -translate-y-[200%]
            bg-slate-300
            pl-2
            lg:relative lg:top-0 lg:w-fit lg:translate-y-0 lg:bg-transparent
          "
          :class="MenuOpen && 'translate-y-0'"
        >
          <ul class="flex flex-col gap-8 py-4 lg:flex-row">
            <li>Rent</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>Manage Property</li>
            <li>Ressources</li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="bg-gray-50 py-14 px-4 font-inter">
      <div class="mx-auto mb-7 flex w-4/5 flex-col gap-7">
        <div class="flex flex-col gap-7 lg:flex-row lg:justify-between">
          <h2 class="text-center text-4xl font-bold text-indigo-900">
            Search properties to rent
          </h2>
          <div class="flex items-center">
            <input
              type="search"
              placeholder="Search with Search Bar"
              class="
                h-12
                w-full
                rounded-lg
                border-2 border-indigo-100
                px-4
                placeholder:text-xs
              "
            />
            <ChevronDownIcon
              class="
                -ml-8
                h-5
                w-5
                rounded-full
                bg-indigo-100
                stroke-indigo-600
                p-1
              "
            />
          </div>
        </div>
        <div class="flex items-center lg:hidden">
          <input
            type="search"
            placeholder="Search Location"
            class="
              h-16
              w-full
              rounded-lg
              border-2 border-indigo-100
              px-4
              placeholder:text-xs
            "
          />
          <SearchIcon
            class="
              -ml-12
              h-10
              w-10
              rounded-sm
              bg-indigo-600
              stroke-indigo-100
              p-1
            "
          />
        </div>
        <div
          class="
            hidden
            h-24
            w-full
            items-center
            gap-4
            rounded-lg
            border-2 border-indigo-100
            px-4
            font-inter
            lg:flex
          "
        >
          <div class="w-1/2 min-w-max border-r-2 border-gray-300 px-4">
            <span class="text-sm text-gray-900">Location</span>
            <p class="font-bold">New York, USA</p>
          </div>
          <div class="w-1/2 min-w-max border-r-2 border-gray-300 px-4">
            <span class="text-sm text-gray-900">When</span>
            <p class="font-bold">Select Move-in Date</p>
          </div>
          <div class="w-1/2 min-w-max border-r-2 border-gray-300 px-4 pr-10">
            <span class="text-sm text-gray-900">Price</span>
            <p class="font-bold">$500-$2,500</p>
          </div>
          <div class="flex w-1/2 items-center justify-center">
            <p
              class="
                rounded-sm
                bg-indigo-600
                px-6
                py-3
                text-center text-indigo-100
              "
            >
              Search
            </p>
          </div>
        </div>
      </div>
      <div
        class="
          mx-auto
          grid
          w-4/5
          grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
          justify-center
          gap-7
        "
      >
        <Card>3 Bathrooms</Card>
        <Card
          :price="2095"
          :adresse="'2699 Green Valley, Highland Lake'"
          :image="'/public/house2.png'"
          :nom="'Palm Harbor'"
        />
        <Card
          :price="4550"
          :adresse="'909 Woodland St, Michigan, IN'"
          :image="'/public/house3.png'"
          :nom="'Faulkner Ave'"
        />
        <Card
          :price="4650"
          :adresse="'210 US Highway, HighlandLake, FL'"
          :image="'/public/house4.png'"
          :nom="'St. Christal'"
        />
        <Card
          :price="3100"
          :adresse="'243 CurlewRoad, PalmHarbor, TX'"
          :image="'/public/house5.png'"
          :nom="'Cover Red'"
        />
        <Card
          :price="4800"
          :adresse="'103 Lake Shores, Michigan, IN'"
          :image="'/public/house6.png'"
          :nom="'Tarpon Bay'"
        />
      </div>
    </main>
    <footer>
      <div class="mb-8 ml-16 mt-3 flex items-center">
        <HomeIcon class="w-8 fill-indigo-500" />
        <span class="font-semibold">Estatery</span>
      </div>
      <div class="ml-5 flex gap-28 border-b border-b-indigo-100 pb-16">
        <div class="flex flex-col gap-3">
          <div class="flex flex-col">
            <p class="text-base font-semibold">Sell A Home</p>
            <span class="text-xs text-gray-400">Request an offer</span>
            <span class="text-xs text-gray-400">Pricing</span>
            <span class="text-xs text-gray-400">Reviews</span>
            <span class="text-xs text-gray-400">Stories</span>
          </div>
          <div class="flex flex-col">
            <p class="text-base font-semibold">Buy A Home</p>
            <span class="text-xs text-gray-400">Buy</span>
            <span class="text-xs text-gray-400">Finance</span>
          </div>
          <div class="flex flex-col">
            <p class="text-base font-semibold">Buy, Rent and Sell</p>
            <span class="text-xs text-gray-400">Buy & sell properties</span>
            <span class="text-xs text-gray-400">Rent home</span>
            <span class="text-xs text-gray-400">Builder trade-up</span>
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex flex-col">
            <p class="text-base font-semibold">Terms & Privacy</p>
            <span class="text-xs text-gray-400">Trust & Safety</span>
            <span class="text-xs text-gray-400">Terms of Service</span>
            <span class="text-xs text-gray-400">Privacy Policy</span>
          </div>
          <div class="flex flex-col">
            <p class="text-base font-semibold">About</p>
            <span class="text-xs text-gray-400">Company</span>
            <span class="text-xs text-gray-400">How it works</span>
            <span class="text-xs text-gray-400">Contact</span>
            <span class="text-xs text-gray-400">Investitor</span>
          </div>
          <div class="flex flex-col">
            <p class="text-base font-semibold">Resources</p>
            <span class="text-xs text-gray-400">Blog</span>
            <span class="text-xs text-gray-400">Guides</span>
            <span class="text-xs text-gray-400">FAQ</span>
            <span class="text-xs text-gray-400">Help Center</span>
          </div>
        </div>
      </div>
      <div class="my-10 flex flex-col items-center justify-center gap-2">
        <span class="text-xs text-gray-400"
          >© 2021 Estatery. All rights reserved</span
        >
        <span class="flex gap-5">
          <Facebook />
          <Instagram />
          <Twitter />
          <Linkedin />
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import { HomeIcon } from "@heroicons/vue/solid";
import { MenuIcon, ChevronDownIcon, SearchIcon } from "@heroicons/vue/outline";
import Linkedin from "./components/Linkedin.vue";
import Facebook from "./components/Facebook.vue";
import Instagram from "./components/Instagram.vue";
import Twitter from "./components/Twitter.vue";
export default {
  components: {
    Card,
    HomeIcon,
    MenuIcon,
    ChevronDownIcon,
    SearchIcon,
    Linkedin,
    Facebook,
    Instagram,
    Twitter,
  },
  data() {
    return {
      MenuOpen: false,
    };
  },
};
</script>

<style>
</style>
