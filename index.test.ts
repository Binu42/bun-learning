import { describe, test, beforeAll, expect } from "bun:test"

beforeAll(() => {

})

describe("math", () => {
    test("addition", () => {
        expect(2+2).toBe(4)
    })

    test("subtraction", () => {
        expect(2-2).toBe(0)
    })
})