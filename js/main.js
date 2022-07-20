function sankou(hyouka) {
    let letter = '';

    if (hyouka === 1) {
        letter = '参考になった';
    } else if (hyouka === 2) {
        letter = 'ふつう';
    } else if (hyouka === 3) {
        letter = '参考にならなかった';
    } else {
        letter = '想定されていない引数です．';
    }
    console.log(letter);

    const p_sankou = document.querySelector('#sankou');
    p_sankou.textContent = letter;

    return letter;
}