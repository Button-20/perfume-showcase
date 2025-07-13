"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "./page.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });

    $(".youtube").colorbox({
      iframe: true,
      innerWidth: 960,
      innerHeight: 585,
    });

    var initSlider = function () {
      var swiper = new Swiper(".review-swiper", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    };

    initSlider();
  }, []);

  return (
    <>
      <header
        id="header"
        className="site-header text-black bg-primary fixed-top"
      >
        <nav id="header-nav" className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <Image
                src="/images/main-logo.png"
                width={195}
                height={25}
                alt="main logo"
              />
            </Link>
            <button
              className="navbar-toggler d-flex d-lg-none order-3 p-2 border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#bdNavbar"
              aria-controls="bdNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Image
                src="/icons/navbar-icon.svg"
                alt="navbar icon"
                width={24}
                height={24}
              />
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="bdNavbar"
              aria-labelledby="bdNavbarOffcanvasLabel"
            >
              <div className="offcanvas-header px-4 pb-0">
                <a className="navbar-brand" href="index.html">
                  <img src="images/main-logo.png" className="logo" />
                </a>
                <button
                  type="button"
                  className="btn-close btn-close-black"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  data-bs-target="#bdNavbar"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 gap-5 pe-3">
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#intro">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#overview">
                      Overview
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#video-player">
                      Video
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#testimonials">
                      Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#featured-products">
                      Perfumes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#company-services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link p-0" href="#faqs">
                      Faqs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section id="intro" className="bg-linear py-lg-7">
        <div className="container">
          <div className="row g-md-5 align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="banner-image">
                <img
                  src="images/banner-image1.png"
                  alt="banner"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="banner-content text-center p-5">
                <h1 className="display-1 text-center">Essence of Elegance</h1>
                <p className="fs-5">
                  Immerse yourself in a symphony of delightful notes that dance
                  upon your skin. Our perfumes blend artistry and passion,
                  capturing the essence of femininity and allure. Enchanting
                  aromas transport you to a realm of pure indulgence.
                </p>
                <a href="shop.html" className="btn btn-lg btn-light mt-3">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-lg-9">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 border-top border-bottom py-5">
              <blockquote className="text-center mx-auto fs-1">
                <p>
                  Immerse yourself in a symphony of delightful notes that dance
                  upon your skin. Our perfumes blend artistry and passion,
                  capturing the essence of femininity and allure. Enchanting
                  aromas transport you to a realm of pure indulgence.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section id="overview" className="py-lg-10 pt-lg-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="featured-item mb-5 text-center">
                <h3 className="fs-4 text-uppercase mb-1">
                  Wireless Connectivity
                </h3>
                <p className="fs-5">
                  Seamlessly connect to your devices Bluetooth for a tangle-free
                  listening experience.
                </p>
              </div>
              <div className="featured-item mb-5 text-center">
                <h3 className="fs-4 text-uppercase mb-1">Long Battery Life</h3>
                <p className="fs-5">
                  Enjoy hours of uninterrupted music with the long-lasting
                  battery of Heady headphones.
                </p>
              </div>
              <div className="featured-item mb-5 text-center">
                <h3 className="fs-4 text-uppercase mb-1">Sleek Design</h3>
                <p className="fs-5">
                  Show off the stylish and sleek design of the headphones,
                  available in various colors.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="image-holder text-center">
                <img
                  src="images/single-image1.png"
                  alt="headphone"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="featured-item mb-5 text-center">
                <h3 className="fs-5 text-uppercase mb-1">
                  Superior Sound Quality
                </h3>
                <p className="fs-5">
                  Enjoy rich, immersive sound with high-fidelity audio
                  technology from heady.
                </p>
              </div>
              <div className="featured-item mb-5 text-center">
                <h3 className="fs-5 text-uppercase mb-1">Noise Isolation</h3>
                <p className="fs-5">
                  Block out external distractions immerse you in your music and
                  yourself in your music.
                </p>
              </div>
              <div className="featured-item mb-5 text-center">
                <h3 className="fs-5 text-uppercase mb-1">Comfortable Fit</h3>
                <p className="fs-5">
                  Designed with plush ear cushions and an adjustable headband
                  for listening sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="video-player" className="video overflow-hidden">
        <div className="row">
          <div className="video-content open-up" data-aos="zoom-out">
            <div className="video-bg position-relative">
              <img
                src="images/video-item.jpg"
                alt="video"
                className="img-fluid"
              />
              <div className="player position-absolute d-flex justify-content-center align-items-center">
                <a
                  className="youtube play-btn d-flex justify-content-center align-items-center bg-white-trans rounded-pill"
                  href="https://www.youtube.com/embed/Cs-7dLsjG9Q?si=VwNVax-UNfZqpVQr"
                >
                  <Image
                    src="/icons/play.svg"
                    className="play text-dark"
                    width="32"
                    height="42"
                    alt="play"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="position-relative py-lg-11">
        <div className="container">
          <div className="row">
            <div className="review-content position-relative d-flex">
              <div className="quotation-mark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="150"
                  viewBox="0 0 8 8"
                  className="quote text-primary me-5 position-relative start-50 top-0 translate-middle"
                >
                  <path
                    fill="currentColor"
                    d="M3 1C1.35 1 0 2.35 0 4v3h3V4H1c0-1.11.89-2 2-2V1zm5 0C6.35 1 5 2.35 5 4v3h3V4H6c0-1.11.89-2 2-2V1z"
                  />
                </svg>
              </div>
              <div className="swiper review-swiper d-flex">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="review-item col-md-11">
                      <blockquote className="fs-1">
                        This perfume is a sensory masterpiece! Every time I wear
                        it, I'm enveloped in a cloud of elegance and
                        sophistication. It's become my signature scent.
                      </blockquote>
                      <div className="author-detail">
                        <div className="name fs-4 text-secondary text-uppercase pt-2">
                          - Joshima Lin
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review-item col-md-11">
                      <blockquote className="fs-1">
                        Some women wear perfume to feel good about them, others
                        like to gain the compliments from their loved ones.
                      </blockquote>
                      <div className="author-detail">
                        <div className="name fs-4 text-secondary text-uppercase pt-2">
                          - Emma Turner
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="review-item col-md-11">
                      <blockquote className="fs-1">
                        As the power of smell can trigger sense receptors, which
                        then send messages to the part of your brain that
                        controls your mood.
                      </blockquote>
                      <div className="author-detail">
                        <div className="name fs-4 text-secondary text-uppercase pt-2">
                          - Emma Turner
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination text-center position-absolute"></div>
        </div>
      </section>
      <section id="featured-products">
        <div className="container-lg">
          <div className="display-header mt-0 text-center mb-5">
            <h2 className="display-4 text-uppercase">Check our perfumes</h2>
            <p className="fs-5">
              Check it out our varieties of colorful headphones.
            </p>
          </div>
          <div className="product-content">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="product-card">
                  <div className="image-holder position-relative zoom-effect">
                    <a href="#">
                      <img
                        src="images/product-item1.jpg"
                        alt="product-item"
                        className="img-fluid"
                      />
                    </a>
                    <div className="cart-concern position-absolute w-100 d-flex justify-content-center align-items-center">
                      <div className="cart-button position-absolute">
                        <button
                          type="button"
                          className="btn btn-dark text-uppercase"
                          data-bs-toggle="modal"
                          data-bs-target="#modallong"
                        >
                          add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-detail mt-3 text-center">
                    <h3 className="card-title fs-4 mb-2 mt-0">
                      <a
                        href="single-product.html"
                        className="text-secondary text-uppercase"
                      >
                        Best Perfume
                      </a>
                    </h3>
                    <div className="card-price text-secondary fs-3">$290</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="product-card">
                  <div className="image-holder position-relative zoom-effect">
                    <a href="#">
                      <img
                        src="images/product-item2.jpg"
                        alt="product-item"
                        className="img-fluid"
                      />
                    </a>
                    <div className="cart-concern position-absolute w-100 d-flex justify-content-center align-items-center">
                      <div className="cart-button position-absolute">
                        <button
                          type="button"
                          className="btn btn-dark text-uppercase"
                          data-bs-toggle="modal"
                          data-bs-target="#modallong"
                        >
                          add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-detail mt-3 text-center">
                    <h3 className="card-title fs-4 mb-2 mt-0">
                      <a
                        href="single-product.html"
                        className="text-secondary text-uppercase"
                      >
                        Best Perfume
                      </a>
                    </h3>
                    <div className="card-price text-secondary fs-3">
                      $290 <del>$350</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5">
                <div className="product-card">
                  <div className="image-holder position-relative zoom-effect">
                    <a href="#">
                      <img
                        src="images/product-item3.jpg"
                        alt="product-item"
                        className="img-fluid"
                      />
                    </a>
                    <div className="cart-concern position-absolute w-100 d-flex justify-content-center align-items-center">
                      <div className="cart-button position-absolute">
                        <button
                          type="button"
                          className="btn btn-dark text-uppercase"
                          data-bs-toggle="modal"
                          data-bs-target="#modallong"
                        >
                          add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-detail mt-3 text-center">
                    <h3 className="card-title fs-4 mb-2 mt-0">
                      <a
                        href="single-product.html"
                        className="text-secondary text-uppercase"
                      >
                        Best Perfume
                      </a>
                    </h3>
                    <div className="card-price text-secondary fs-3">$290</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="company-services" className="py-lg-7">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="icon-box text-center">
                <div className="icon-box-icon mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    className="balloon svg-secondary"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    >
                      <path d="M8 16.607c1.15.86 2.518 1.38 4 1.393c4.142.034 7.594-3.92 7.56-8.196C19.527 5.53 16.142 2.034 12 2c-4.142-.034-7.473 3.404-7.44 7.68A8.88 8.88 0 0 0 5.244 13" />
                      <path d="M15.5 9a3.035 3.035 0 0 0-3-3M12 20.35c.321 0 .482 0 .593-.022c.654-.128 1.051-.772.858-1.39c-.033-.105-.109-.242-.261-.515M12 20.35c-.321 0-.482 0-.593-.022c-.654-.128-1.051-.772-.858-1.39c.033-.105.109-.242.261-.515M12 20.35v2.15" />
                    </g>
                  </svg>
                </div>
                <div className="icon-box-content ps-3">
                  <h4 className="fs-3 fw-600 text-capitalize">
                    100% high quality product
                  </h4>
                  <p className="fs-5">We have option of pick up in store</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 border-start border-end">
              <div className="icon-box text-center">
                <div className="icon-box-icon mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    className="bag-heart svg-secondary"
                  >
                    <g fill="none">
                      <path
                        fill="currentColor"
                        d="m12 12.191l-.519.542a.75.75 0 0 0 1.038 0L12 12.191Zm-.957 3.675l-.444.604l.444-.604Zm1.914 0l-.444-.605l.444.605Zm-.957.462v.75v-.75Zm-.514-1.067c-.417-.307-.878-.69-1.227-1.093c-.368-.426-.509-.757-.509-.971h-1.5c0 .77.441 1.45.875 1.952c.453.525 1.014.984 1.474 1.321l.887-1.21ZM9.75 13.197c0-.576.263-.827.492-.907c.25-.088.714-.06 1.24.443l1.037-1.083c-.825-.79-1.861-1.096-2.773-.776c-.934.327-1.496 1.226-1.496 2.323h1.5Zm3.65 3.273c.46-.337 1.022-.796 1.475-1.32c.434-.502.875-1.183.875-1.953h-1.5c0 .214-.141.545-.51.971c-.348.403-.809.786-1.226 1.093l.887 1.21Zm2.35-3.273c0-1.097-.563-1.996-1.496-2.323c-.912-.32-1.948-.014-2.773.776l1.038 1.083c.525-.503.989-.531 1.24-.443c.228.08.491.33.491.907h1.5ZM10.6 16.47c.368.27.782.608 1.4.608v-1.5c-.024 0-.04 0-.094-.03a4 4 0 0 1-.42-.287l-.887 1.21Zm1.914-1.21a4 4 0 0 1-.42.289c-.054.029-.07.029-.094.029v1.5c.618 0 1.032-.337 1.4-.608l-.886-1.21Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M9 6V5a3 3 0 1 1 6 0v1m5.224 6.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922c-1.11.922-1.403 2.483-1.989 5.604c-.823 4.389-1.234 6.583-.034 8.029C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445c.696-.84.85-1.93.696-3.555"
                      />
                    </g>
                  </svg>
                </div>
                <div className="icon-box-content ps-3">
                  <h4 className="fs-3 fw-600 text-capitalize">
                    Free shipping charge
                  </h4>
                  <p className="fs-5">Inside City delivery within 5 days</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="icon-box text-center">
                <div className="icon-box-icon mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    className="handiplast svg-secondary"
                  >
                    <g fill="none">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="M13.5 7.642L9.071 3.213a4.142 4.142 0 0 0-5.858 5.858L14.93 20.787a4.142 4.142 0 0 0 5.858-5.858l-4.358-4.358"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        d="m12 17.858l-2.929 2.929A4.142 4.142 0 0 1 2.596 20m3.546-8l-2.929 2.929c-.322.322-.58.685-.774 1.071M12 6.142l2.929-2.929a4.142 4.142 0 1 1 5.858 5.858L17.857 12"
                      />
                      <path
                        fill="currentColor"
                        d="M15.841 12.871a.788.788 0 1 1-1.114 1.114a.788.788 0 0 1 1.114-1.114Zm-3.712-3.712a.787.787 0 1 0-1.114 1.114a.787.787 0 0 0 1.114-1.114Zm4.641 6.497a.787.787 0 1 1-1.114 1.114a.787.787 0 0 1 1.114-1.114ZM9.345 8.23A.788.788 0 1 0 8.23 9.346A.788.788 0 0 0 9.345 8.23Zm3.712 3.713a.787.787 0 1 1-1.113 1.114a.787.787 0 0 1 1.113-1.114Zm.928 2.785a.788.788 0 1 1-1.114 1.113a.788.788 0 0 1 1.114-1.113Zm-3.712-3.713a.787.787 0 1 0-1.114 1.114a.787.787 0 0 0 1.114-1.114Z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="icon-box-content ps-3">
                  <h4 className="fs-3 fw-600 text-capitalize">
                    Money back guarantee
                  </h4>
                  <p className="fs-5">We will take return in some cases</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faqs" className="py-lg-8">
        <div className="container-lg">
          <div className="row align-items-center">
            <h2 className="display-4 text-uppercase mt-0 text-center">
              FAQs Section
            </h2>
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item border-0 border-bottom">
                  <h2 className="accordion-header m-0" id="headingOne">
                    <button
                      className="accordion-button fs-3 fw-light text-secondary text-uppercase bg-transparent px-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Are your Perfumes Branded?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, our each and every product are branded.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 border-bottom">
                  <h2 className="accordion-heade m-0" id="headingTwo">
                    <button
                      className="accordion-button fs-3 fw-light text-secondary text-uppercase bg-transparent px-0 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How long does the fragnance last?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      A full warranty may be active for just a limited time
                      after the item is purchased, perhaps 60 or 90 days, or it
                      may cover the product "for life" (the same goes for
                      limited warranties).
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 border-bottom">
                  <h2 className="accordion-header m-0" id="headingThree">
                    <button
                      className="accordion-button fs-3 fw-light text-secondary text-uppercase bg-transparent px-0 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can I replace the product?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, you can replace your product with an incident of
                      accidental damage.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="instagram" className="py-lg-7">
        <div className="container-lg">
          <div className="row">
            <h2 className="display-4 text-uppercase text-center">
              Instagram #YourBrand
            </h2>
            <div className="col-lg-2 col-md-6 mb-3">
              <img
                src="images/insta-item1.jpg"
                alt="instagram"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-2 col-md-6 mb-3">
              <img
                src="images/insta-item2.jpg"
                alt="instagram"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-2 col-md-6 mb-3">
              <img
                src="images/insta-item3.jpg"
                alt="instagram"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-2 col-md-6 mb-3">
              <img
                src="images/insta-item4.jpg"
                alt="instagram"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-2 col-md-6 mb-3">
              <img
                src="images/insta-item5.jpg"
                alt="instagram"
                className="img-fluid"
              />
            </div>
            <div className="col-lg-2 col-md-6 mb-3">
              <img
                src="images/insta-item6.jpg"
                alt="instagram"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="subscribe" className="py-lg-6 bg-linear">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="subscribe-content">
                <div className="subscribe-header text-center">
                  <h2 className="display-4 text-uppercase">Subscribe Us</h2>
                  <p className="fs-5">
                    Subscribe to our newsletter for discounts and updates.
                  </p>
                </div>
                <form id="form" className="py-5 position-relative">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    className="w-100 bg-transparent border-0 border-bottom text-secondary fs-5"
                  />
                  <button
                    type="button"
                    className="btn-subscribe text-secondary position-absolute border-0 bg-transparent text-uppercase"
                  >
                    Subscribe
                  </button>
                </form>
                <div className="social-links">
                  <ul className="list-unstyled d-flex flex-wrap gap-3 justify-content-center">
                    <li className="p-2">
                      <a href="#">
                        <Image
                          src="/icons/facebook.svg"
                          className="facebook svg-secondary"
                          width="25"
                          height="25"
                          alt="facebook"
                        />
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="#">
                        <Image
                          src="/icons/twitter.svg"
                          className="twitter svg-secondary"
                          width="25"
                          height="25"
                          alt="twitter"
                        />
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="#">
                        <Image
                          src="/icons/youtube.svg"
                          className="youtube svg-secondary"
                          width="25"
                          height="25"
                          alt="youtube"
                        />
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="#">
                        <Image
                          src="/icons/linkedin.svg"
                          className="linkedin svg-secondary"
                          width="25"
                          height="25"
                          alt="linkedin"
                        />
                      </a>
                    </li>
                    <li className="p-2">
                      <a href="#">
                        <Image
                          src="/icons/instagram.svg"
                          className="instagram svg-secondary"
                          width="25"
                          height="25"
                          alt="instagram"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-bottom text-center py-3">
        <p>
          © 2023 Fragrant. Designed by
          <a href="https://templatesjungle.com/" className="text-dark">
            <strong>TemplatesJungle</strong>
          </a>
        </p>
      </div>
    </>
  );
}
