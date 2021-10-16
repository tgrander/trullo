const uuid = require("./uuid")
// @ponicode
describe("uuid.default", () => {
    test("0", () => {
        let callFunction = () => {
            uuid.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
