function showSection(sectionId){

    // ambil semua section
    const sections = document.querySelectorAll('.section');

    // sembunyikan semua
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add('active');
}