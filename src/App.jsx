import DataImage from "./data";
import {listTools, listProyek} from "./data";

function App() {

  return (
    <>
    <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex item-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
          <q>Jangan Takut Untuk Gagal, Karena Gagal Adalah Awal Dari Keberhasilan</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Halo, Saya Danio Rafael Ginting</h1>
        <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan dalam bidang Programming dan Desain Arsitektur, terutama pada
          pembuatan Website dan poster, Pamflet serta Banner. Saya juga memiliki ketertarikan di bidang otomotif dan sudah menjalani nya selama lebih dari 3 tahun.
        </p>
      </div>
      <div className="flex items-center sm:gap-4 gap-2">
        <a href="#talent" className="bg-purple-700 p-4 rounded-2xl hover:bg-purple-600">
          Lihat Hobby<i className="ri-arrow-down-line ri-lg"></i>
        </a>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto
      animate__animated animate__fadeInUp animate__delay-4s" loading="lazy"/>
    </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang"></div>
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
      data-aos="fade-up" data-aos-duration="1000">
      <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10
      sm:hidden"loading="lazy"/>
        <p className="text-base/loose mb-10">
          Hi, Saya Danio Rafael Ginting, Seorang mahasiswa dari Universitas Satya Tera Bhinneka,saya tinggal di
          Jl. Tanjung Anom Perumahan Puri Anom Asri Blok BB No.77, saya lahir pada tanggal 24 Juli 2006.
          Saya percaya bahwa Desain dan fungsionalitas harus jalan beriringan, Sehingga setiap proyek yang Saya
          kembangkan tidak hanya terlihat bagus tapi juga bermanfaat bagi khalayak ramai. Sejujurnya saya juga masih
          dalam tahap berkembang ddalam bidang programming, saya berharap dapat berkembang baik kedepanya dan menciptakan evolusi
          eyang baik untuk teknologi indonesia.
        </p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block
          hidden" loading="lazy"/>
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1">
                18<span className="text-violet-500">+</span>
              </h1>
              <p>Usia</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1">
                1<span className="text-violet-500">+</span>
              </h1>
              <p>Tahun Pembelajaran</p>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4"data-aos="fade-up"
        data-aos-duration="1000">
        Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/looseopacity-50"
        data-aos="fade-up" data-aos-delay="300">
          Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website ataupun 
          Design
        </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm-grid-cols-2
          grid-cols-1 gap-4">
            {listTools.map((tool) => (
               <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md
            hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay={tool.dad}>
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 
              group-houver:bg-zinc-900" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.keterangan}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="talent"> 
            <h1 className="text-center text-4xl font-bold mb-2">Hobby</h1>
            <p className="text-base/loose text-center opacity-50" data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="300">Berikut ini beberapa Hobby atau kegiatan
            yang saya lakukan</p>
          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay={proyek.dad}>
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy"/>
                <div>
                  <h1 className="test-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div>
                    <div className="m5-8 text-center">
                      <a href="#" className="bg-red-700 p-3 rounded-lg block border
                      border-zinc-600 hover:bg-red-600">Lihat Galeri</a>
                    </div>
                  </div>
                </div>
            </div>
            ))}
          </div>
      </div>
      {/* Proyek */}
      
      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up"
            data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="300">Ayo contact-an :D.
        </p>
        <form action="https://formsubmit.co/muhammadpogba03@gmail.com" method="POST"
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off"
        data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="500">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama..." className="border
               border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="font-semi-bold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email..."
              className="border border-zinc-500 p-2 rounded-md" required />
              </div>
              <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
             <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="pesan..."
             className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
             <div className="text-center">
              <button type="submit" className="bg-red-700 p-3 rounded-lg block border
              border-zinc-600 hover:bg-biolet-600">
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
    </>
  );
}

export default App
