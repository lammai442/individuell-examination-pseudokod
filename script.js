// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

SET summa = INPUT från användare

SET antalVänner = INPUT från användare

SET dricks = INPUT med instruktioner om att omvandla till decimalform, t ex 10% blir 0.1

SET totalSumma = summa + (summa * dricks)

SET perPerson till totalSumma / antalVänner

PRINT Varje person ska betala perPerson kr.

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om

/*

SET dictionary =  [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]

SET wordOne = FOUR

SET wordTwo = FIVE

SET guess = 0

FUNCTION isOneLetterApart(wordA, wordB)
    SET variabel diffCount = 0
   
    FOR SET i = 0 och jämför varje tecken i wordOne [i] med INPUT [i]
        IF [i] !== på både wordOne och INPUT
            diffCount++
      END IF
    END FOR

    RETURN diffCount === 1
END FUNCTION
   
WHILE wordOne !== wordTwo
    PRINT 
        Nuvarande ord: + “wordOne”
        Skriv ett ord som skiljer sig med ett tecken från + “wordOne” +.
        Slutordet är + “wordTwo”.
        Du har gissat + “guess” + gånger.
    END PRINT

    wordOne = INPUT

    IF wordOne inte finns i dictionary
        PRINT Ordet finns inte med i ordboken.
        guess++
    END IF

    ELSE IF wordOne === INPUT
        PRINT Ordet är samma som nuvarande ord, välj ett annat ord.
        guess++
    END ELSE IF
  
    ELSE IF isOneLetterApart(wordOne, INPUT) === false
        PRINT Ordet skiljer sig med mer än ett tecken.
        guess++
    END ELSE IF

    ELSE
        wordOne = INPUT
        PRINT Rätt gissat! Nuvarande ord är wordOne 
        guess++
    END ELSE
END WHILE

PRINT Grattis! Du vann på + “guess” + gissningar.

*/