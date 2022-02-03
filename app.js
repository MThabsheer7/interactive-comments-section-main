document.querySelector('#cmt').addEventListener('blur', function () {
    this.classList.toggle('active-cmt', this.value.length > 0);
});
