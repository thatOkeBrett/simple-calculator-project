const {add} =require("/home/dee/simple-calculator-project/src/simple_calculator")
const {multiply} =require("/home/dee/simple-calculator-project/src/simple_calculator")

describe("add", function(){
    it("should add two numbers",function(){
        expect(add(1,4)).toEqual(5)
    })
    it("should add two numbers",function(){
        expect(add(-1,-4)).toEqual(-5)
    })
    it("should add numbers",function(){
        expect(add(1,4,6,2)).toEqual(13)
    })
})

describe("multiply", function(){
    it("should multiply two numbers",function(){
        expect(multiply(2,4)).toBe(8)
    })
    it("should multiply two numbers",function(){
        expect(multiply(-1,4)).toEqual(-4)
    })
    
    it("should multiply numbers",function(){
        expect(multiply(1,4,3,2)).toEqual(24)
    })
})