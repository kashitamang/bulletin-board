// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderPost } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test renderPost() function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="post"><h1>lately...</h1><h4>status: 🤥</h4><p>lately i've been feeling like its hard to tell the difference between learning and familiarizing/memorizing? or are they the same? when will i know?</p><p class="signature">- anonymous developer</p></div>`;
    
    const post = {
        id: 1,
        title: 'is it just me?',
        feeling: '🙃',
        confession: 'is it just me or is it hard to know, what you dont know...yet?',
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPost(post);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

