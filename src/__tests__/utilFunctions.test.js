const {shortenText} = require('../../src/utils/functions')
const {wordCount, attachUserName} = require('../../server/utils')
const {shortText, longText, posts, users} = require('../../src/__tests__/__data__/testData')

test('shortenText should not alter a string with less than 100 characters', ()=>{
    expect(shortenText(shortText)).toHaveLength(29)
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount should correctly count the number of words in a sentence', ()=>{
    expect(wordCount(posts)).toBe(233);
    });

test('attachUserName should correctly attach a users full name to a post', ()=>{
        const checkUsers = attachUserName(users, posts)
        expect(checkUsers[0]).toHaveProperty('displayName')
    }) 

test('attachUserName should remove any post with no matching user', ()=>{
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})

