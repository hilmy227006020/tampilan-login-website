const params = new URLSearchParams(window.location.search);


const nama = decodeURIComponent(params.get('nama'));
const npm = decodeURIComponent(params.get('npm'));
const alamat = decodeURIComponent(params.get('alamat'));
const jenis_kelamin= decodeURIComponent(params.get('jenis_kelamin'));
const jurusan = decodeURIComponent(params.get('jurusan'));
const angkatan = decodeURIComponent(params.get('angkatan'));

document.getElementById('name').textContent = ': ' + nama;
document.getElementById('npm').textContent = ': ' + npm;
document.getElementById('alamat').textContent = ': ' + alamat;
document.getElementById('gender').textContent = ': ' + jenis_kelamin;
document.getElementById('jurusan').textContent = ': ' + jurusan;
document.getElementById('angkatan').textContent = ': ' + angkatan;
