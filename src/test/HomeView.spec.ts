import { describe, it, expect } from 'vitest'
import { mount } from "@vue/test-utils"
import HomeView from "../views/HomeView.vue"
import { animateElements } from "../animations"


jest.mock("../animations", () => ({
      animateElements: jest.fn(),
  }));


describe("HomeView.vue", () => {
    it("Renders the component correctly", () => {
        const wrapper = mount(HomeView)
        expect(wrapper.exists()).toBe(true)
    })
})

describe("HomeView.vue", () => {
    it("Calls animateElements function on app mount", async() => {
        const wrapper = mount(HomeView)
        mount(HomeView);
        await wrapper.vm.$nextTick();
        expect(animateElements).toHaveBeenCalled();
    })
})

describe("HomeView.vue", () => {
    it("Contains these elements in the DOM", () => {
        const wrapper = mount(HomeView)
        expect(wrapper.find(".header").exists()).toBe(true)
        expect(wrapper.find(".container").exists()).toBe(true)
        expect(wrapper.find(".square-1").exists()).toBe(true)
        expect(wrapper.find(".landing-banner").exists()).toBe(true)
        expect(wrapper.find(".orange-flower").exists()).toBe(true)
        expect(wrapper.find(".trigger-1").exists()).toBe(true)
        expect(wrapper.find(".spacer").exists()).toBe(true)
        expect(wrapper.find(".trigger-2").exists()).toBe(true)
        expect(wrapper.find(".landing-paragraph-container").exists()).toBe(true)
        expect(wrapper.find(".landing-paragraph").exists()).toBe(true)
        expect(wrapper.find(".trigger-3").exists()).toBe(true)
        expect(wrapper.find(".home-container").exists()).toBe(true)
        expect(wrapper.find(".darkness-trigger").exists()).toBe(true)
        expect(wrapper.find(".star-container").exists()).toBe(true)
        expect(wrapper.find(".star-1").exists()).toBe(true)
        expect(wrapper.find(".star-2").exists()).toBe(true)
        expect(wrapper.find(".star-3").exists()).toBe(true)
        expect(wrapper.find(".star-sm1").exists()).toBe(true)
        expect(wrapper.find(".star-sm2").exists()).toBe(true)
        expect(wrapper.find(".star-sm3").exists()).toBe(true)
        expect(wrapper.find(".small-stars").exists()).toBe(true)
        expect(wrapper.find(".big-star-container").exists()).toBe(true)
        expect(wrapper.find(".parallax-middle").exists()).toBe(true)
        expect(wrapper.find(".parallax-1").exists()).toBe(true)
        expect(wrapper.find(".parallax-top").exists()).toBe(true)
        expect(wrapper.find(".parallax-2").exists()).toBe(true)
        expect(wrapper.find(".spacer-black").exists()).toBe(true)
    })
})

describe("HomeView.vue", () => {
    it("Applies the correct CSS classes", () => {
        const wrapper = mount(HomeView)
        expect(wrapper.find(".star-1").element.classList.contains("star-1")).toBe(true)
        expect(wrapper.find(".star-2").element.classList.contains("star-2")).toBe(true)
        expect(wrapper.find(".star-3").element.classList.contains("star-3")).toBe(true)
        expect(wrapper.find(".star-sm1").element.classList.contains("star-sm1")).toBe(true)
        expect(wrapper.find(".star-sm2").element.classList.contains("star-sm2")).toBe(true)
    })
})
