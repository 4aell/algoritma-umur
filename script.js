function showSection(id, button = null){

    // SEMBUNYIKAN SEMUA SECTION
    const sections =
    document.querySelectorAll('.section');

    sections.forEach(section => {

        section.classList.remove('active');

    });

    // TAMPILKAN SECTION TERPILIH
    document.getElementById(id)
    .classList.add('active');

    // ACTIVE SIDEBAR
    if(button){

        const buttons =
        document.querySelectorAll('.nav-btn');

        buttons.forEach(btn => {

            btn.classList.remove('active-btn');

        });

        button.classList.add('active-btn');
    }
}
