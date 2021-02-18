const {shortenText} = require('../../src/utils/functions')
const {wordCount, attachUserName} = require('../../server/utils')
const {shortText, longText, posts, users} = require('../../src/__tests__/__data__/testData')

test('shortenText should not alter a string with less than 100 characters', ()=>{
    expect(shortenText(shortText)).toHaveLength(29)
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...')
})