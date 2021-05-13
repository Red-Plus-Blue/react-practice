import Stack from '../logic/MaxStack';

test("Given a stack with one value, that value is the max", () => {
    // Given
    let stack = new Stack();
    stack.push(1);

    // Then
    expect(stack.max()).toEqual(1);
});

test("Given a stack with a value, when a larger value is pushed, then that is the new max", () => {
    // Given
    let stack = new Stack();
    stack.push(1);

    // When
    stack.push(2);

    // Then
    expect(stack.max()).toEqual(2);
});

test("Given a stack with a value, when a smaller value is pushed, then the original value is the max", () => {
    // Given
    let stack = new Stack();
    stack.push(5);

    // When
    stack.push(3);

    // Then
    expect(stack.max()).toEqual(5);
});