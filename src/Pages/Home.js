import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faBed,
  faBuilding,
  faCity,
  faClinicMedical,
  faHospital,
} from "@fortawesome/free-solid-svg-icons";
// import Icon from "../Components/Icon.tsx";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
// import Map from "../Components/Map";

//styles
import "../assets/Style/App.scss";
import "../assets/Style/qa.scss";

function Home() {
  const src = "/movie.mp4";
  const newsSrc = "/movie2.mp4";
  const ref = useRef(null);
  const [itemsHeight, setItemsHeight] = useState(0);
  const [itemsWidth, setItemsWidth] = useState(0);
  const [translate, setTranslate] = useState("0px");


  useEffect(() => {
   
    const x = document.querySelector(".news-items");
    console.log(x.clientWidth, x.scrollWidth);

    if (ref.current) {
      setItemsHeight(ref.current.scrollWidth);
      setItemsWidth(ref.current.scrollWidth);
      console.log('itemsWidth', itemsWidth)
    }
  }, [itemsHeight ]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(
        "window.scrollY",
        window.scrollY,
        ref.current.getBoundingClientRect()
      );

      if (
        ref.current.getBoundingClientRect().top === 0 &&
        window.scrollY - window.innerHeight <= 2638
      ) {
        setTranslate(`translate(${window.scrollY - window.innerHeight}px,${0}px)`);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stl = {
    height: `calc(1920px + 150vw)`
  }

  const style = {
    width: `${itemsWidth}px`,
    height: `${itemsHeight}px`,
    transform: `${translate}`,
  };

  return (
    <>
      <section id="home " className="h-screen">
        <div className="home-title container ">
          <img src="/header.png" alt="header"></img>
          <h1 className="text-white	hidden">
            شرکت مهندسان مشاور خانه سازی ایران
          </h1>
        </div>

        <div className="video_backdrop absolute">
          <span className="circle">
            <span className="triangle"></span>
          </span>
        </div>
        <video height={"100%"} width={"100%"} className="h-screen object-fill" autoPlay muted loop>
          <source src={src}></source>
        </video>
      </section>

      <section className="qa w-screen" style={stl}>
        <div className="qa-container flex  bg-red-500">
          <div className="qa-left w-3/4  ">
            <div className="vendor-container flex items-center h-1/2">
              <div className="container flex flex-col items-start justify-between	 h-2/4">
                <h2>درخواست شرکت در مناقصه</h2>

                <p>
                  جهت شرکت در مناقصات پروژه‌ها به صفحه زیر مراجعه کرده و درخواست
                  خود را برای ما ارسال نمایید
                </p>

                <Link to={`/about-us`} className="link flex items-center">
                  {" "}
                  پر کردن فرم
                  <FontAwesomeIcon icon={faArrowLeftLong} className="mr-2" />
                </Link>
              </div>
            </div>

            <div className="projects-container flex items-center h-1/2">
              <div className="container flex flex-col	items-start justify-between h-2/4">
                <h2>پروژه‌های مجموعه</h2>

                <p>
                  برای آشنا شدن با پروژه‌های مجموعه ما صفحه زیر را کلیک کنید
                </p>

                <Link to={`/about-us`} className="link flex items-center">
                  دیدن پروژه‌ها
                  <FontAwesomeIcon
                    icon={faArrowLeftLong}
                    className="text-blue-50 mr-2"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className=" bg-green-200 w-1/3 ">
            <div className="news-container bg-slate-900  flex"  style={style}>
              <div className="news-items  flex" >
                <div className="flex  " ref={ref} >
                  <div className="news-header news-item w-96  flex items-center">
                    <video width={"100%"} height={"100%"} autoPlay muted loop>
                      <source src={newsSrc}></source>
                    </video>

                    <Link
                      to={`/news-list`}
                      className="news-title link flex items-center"
                    >
                      مشاهده اخبار
                      <FontAwesomeIcon
                        icon={faArrowLeftLong}
                        className="mr-2"
                      />
                    </Link>
                  </div>
                  <article className="news-item flex">
                    <img
                      src="https://khanesaziceco.ir/wp-content/uploads/2020/02/WhatsApp-Image-2021-02-23-at-17.22.21.jpeg"
                      alt="x"
                    ></img>

                    <div className="news-item__container flex flex-col justify-even mt-auto px-5 h-3/4">
                      <h3 className="news-item__title">
                        آغاز کلنگ‌زنی بیمارستان ۱۰۰۰ تخت خوابی معالی‌آباد شیراز
                      </h3>

                      <p className="news-item__desc">
                        با همت و تلاش مسئولین محترم وزارت کار،تعاون و رفاه
                        اجتماعی و همچنین مدیرعامل شرکت خانه‌سازیبا همت و تلاش
                        مسئولین محترم وزارت کار،تعاون و رفاه اجتماعی و همچنین
                        مدیرعامل شرکت خانه‌سازی
                      </p>

                      <Link
                        to={`/news-list`}
                        className="link flex items-center"
                      >
                        مشاهده خبر
                        <FontAwesomeIcon
                          icon={faArrowLeftLong}
                          className="mr-2"
                        />
                      </Link>
                    </div>
                  </article>
                  <article className="news-item flex">
                    <img
                      src="https://khanesaziceco.ir/wp-content/uploads/2020/02/WhatsApp-Image-2021-02-23-at-17.22.21.jpeg"
                      alt="x"
                    ></img>

                    <div className="news-item__container flex flex-col justify-even mt-auto px-5 h-3/4">
                      <h3 className="news-item__title">
                        آغاز کلنگ‌زنی بیمارستان ۱۰۰۰ تخت خوابی معالی‌آباد شیراز
                      </h3>

                      <p className="news-item__desc">
                        با همت و تلاش مسئولین محترم وزارت کار،تعاون و رفاه
                        اجتماعی و همچنین مدیرعامل شرکت خانه‌سازیبا همت و تلاش
                        مسئولین محترم وزارت کار،تعاون و رفاه اجتماعی و همچنین
                        مدیرعامل شرکت خانه‌سازی
                      </p>

                      <Link
                        to={`/news-list`}
                        className="link flex items-center"
                      >
                        مشاهده خبر
                        <FontAwesomeIcon
                          icon={faArrowLeftLong}
                          className="mr-2"
                        />
                      </Link>
                    </div>
                  </article>
                  <article className="news-item flex">
                    <img
                      src="https://khanesaziceco.ir/wp-content/uploads/2020/02/WhatsApp-Image-2021-02-23-at-17.22.21.jpeg"
                      alt="x"
                    ></img>

                    <div className="news-item__container flex flex-col justify-even mt-auto px-5 h-3/4">
                      <h3 className="news-item__title">
                        آغاز کلنگ‌زنی بیمارستان ۱۰۰۰ تخت خوابی معالی‌آباد شیراز
                      </h3>

                      <p className="news-item__desc">
                        با همت و تلاش مسئولین محترم وزارت کار،تعاون و رفاه
                        اجتماعی و همچنین مدیرعامل شرکت خانه‌سازیبا همت و تلاش
                        مسئولین محترم وزارت کار،تعاون و رفاه اجتماعی و همچنین
                        مدیرعامل شرکت خانه‌سازی
                      </p>

                      <Link
                        to={`/news-list`}
                        className="link flex items-center"
                      >
                        مشاهده خبر
                        <FontAwesomeIcon
                          icon={faArrowLeftLong}
                          className="mr-2"
                        />
                      </Link>
                    </div>
                  </article>
                  <article className="news-item flex">
                    <img
                      src="https://khanesaziceco.ir/wp-content/uploads/2020/02/WhatsApp-Image-2021-02-23-at-17.22.21.jpeg"
                      alt="x"
                    ></img>

                    <div className="news-item__container flex flex-col justify-even mt-auto px-5 h-3/4">
                      <h3 className="news-item__title">
                        آغاز کلنگ‌زنی بیمارستان ۱۰۰۰ تخت خوابی معالی‌آباد شیراز
                      </h3>

                      <p className="news-item__desc">
                        با همت و تلاش مسئولین محترم وزارت کار،تعاون و رفاه
                        اجتماعی و همچنین مدیرعامل شرکت خانه‌سازیبا همت و تلاش
                        مسئولین محترم وزارت کار،تعاون و رفاه اجتماعی و همچنین
                        مدیرعامل شرکت خانه‌سازی
                      </p>

                      <Link
                        to={`/news-list`}
                        className="link flex items-center"
                      >
                        مشاهده خبر
                        <FontAwesomeIcon
                          icon={faArrowLeftLong}
                          className="mr-2"
                        />
                      </Link>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="statistics">
        <div className="container">
          <h2 className="mb-10 text-center">پروژه های طراحی شده در یک نگاه</h2>

          <div className="flex justify-between">
            <div className="statistics-item flex flex-col items-center">
              <h4 className="flex flex-col">
                <FontAwesomeIcon icon={faCity} />
                سرمایه گذاری
              </h4>

              <CountUp
                delay={0}
                end={14356}
                duration={4}
                formattingFn={(num) => num.toLocaleString()}
              />
            </div>
            <div className="statistics-item flex flex-col items-center">
              <h4 className="flex flex-col">
                <FontAwesomeIcon icon={faBuilding} />
                متر مربع اداری
              </h4>

              <CountUp
                delay={0.5}
                end={238746}
                formattingFn={(num) => num.toLocaleString()}
              />
            </div>
            <div className="statistics-item flex flex-col items-center">
              <h4 className="flex flex-col">
                <FontAwesomeIcon icon={faClinicMedical} />
                متر مربع درمانگاه
              </h4>

              <CountUp
                delay={0.75}
                end={234897}
                duration={5}
                formattingFn={(num) => num.toLocaleString()}
              />
            </div>
            <div className="statistics-item flex flex-col items-center">
              <h4 className="flex flex-col">
                <FontAwesomeIcon icon={faHospital} />
                متر مربع پلی کلینیک
              </h4>

              <CountUp
                delay={1}
                end={10480}
                formattingFn={(num) => num.toLocaleString()}
              />
            </div>
            <div className="statistics-item flex flex-col items-center">
              <h4 className="flex flex-col">
                <FontAwesomeIcon icon={faBed} />
                تخت خواب بیمارستان
              </h4>

              <CountUp
                delay={0}
                end={14356}
                duration={4}
                formattingFn={(num) => num.toLocaleString()}
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="map">
        <Map />
      </section> */}
    </>
  );
}

export default Home;
