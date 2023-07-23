const checkArr = Array.from(document.querySelectorAll('.interest__check'))

checkArr.forEach((check) => {
    check.addEventListener('change', () => {
        i = check.closest('.interest')
        let checkNext = Array.from(i.querySelectorAll('.interest__check'))
        if (check.checked == true) {
            checkNext.forEach((ch) => {
                ch.checked = true
            })
        } else {
            checkNext.forEach((ch) => {
                ch.checked = false
            })
          }
    })
})
