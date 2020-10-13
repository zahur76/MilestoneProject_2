describe("My game functions",function(){

    beforeEach(function(){
        totalMatch= 0;
        totalTurns = 0;
    })
    describe("Game Array function",function(){
        it("should exist",function(){
            expect(gameArray).toBeDefined();
        })
    })
    describe("Game Array function",function(){
        it('should exist return ["yoda","yoda","vader","vader","luke","luke","r2","r2"]',function(){
            gameArray("easy");
            expect(characterArray).toEqual(["yoda","yoda","vader","vader","luke","luke","r2","r2"]);
        })
    })
    describe("Match check function",function(){
        it("should exist",function(){
            expect(matchCheck).toBeDefined();
        })
    }) 
    describe("Match check function",function(){
        it("should return total turns 1",function(){
            matchCheck(["yoda","yoda"])
            expect(totalTurns).toBe(1);
        })
    })    
    describe("Match check function",function(){
        it("should return total match 1",function(){
            matchCheck(["yoda","yoda"])
            expect(totalMatch).toBe(1);
        })
    })
    describe("Game function",function(){
        it("should exist",function(){
            game();
            expect(game).toBeDefined(0);
        })
    })   
    describe("Game function",function(){
        it("should be equal to 0",function(){
            game();
            expect(click).toBe(0);
        })
    })      
})