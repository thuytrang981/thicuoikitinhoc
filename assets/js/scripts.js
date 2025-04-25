const backToTopButton = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible")
  } else {
    backToTopButton.classList.remove("visible")
  }
})

backToTopButton.addEventListener("click", (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: "smooth" })
})


document.querySelectorAll(".menu__list--item a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    

    if (href.startsWith("#")) {
      e.preventDefault()
      const targetElement = document.getElementById(href.substring(1))
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    }

  })
})


const galleryImages = document.querySelectorAll(".work img")

galleryImages.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    galleryImages.forEach((otherImg) => {
      if (otherImg !== img) {
        otherImg.style.opacity = "0.5"
        otherImg.style.transform = "scale(0.95)"
      }
    })
  })

  img.addEventListener("mouseleave", () => {
    galleryImages.forEach((otherImg) => {
      otherImg.style.opacity = ""
      otherImg.style.transform = ""
    })
  })
})


document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const slogan = document.querySelector(".header__slogan")
    if (slogan) {
      slogan.style.animation = "none"

      const text = slogan.textContent
      slogan.textContent = ""
      slogan.style.display = "block"

      let i = 0
      function typeWriter() {
        if (i < text.length) {
          slogan.textContent += text.charAt(i)
          i++
          setTimeout(typeWriter, 50)
        }
      }

      setTimeout(typeWriter, 500)
    }
  }, 1000)
})


document.addEventListener("DOMContentLoaded", () => {

  let menuBtn = document.querySelector(".menu-btn")
  if (!menuBtn) {
    menuBtn = document.createElement("button")
    menuBtn.classList.add("menu-btn")
    menuBtn.innerHTML = '<i class="fas fa-bars"></i> Menu <i class="fas fa-chevron-down"></i>'


    const menu = document.querySelector(".menu")
    const menuList = document.querySelector(".menu__list")


    if (menu && menuList) {
      menu.insertBefore(menuBtn, menuList)
    }
  }


  const menuList = document.querySelector(".menu__list")


  if (menuBtn && menuList) {
    menuBtn.addEventListener("click", () => {
      menuList.classList.toggle("show")


      if (menuList.classList.contains("show")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i> Close <i class="fas fa-chevron-up"></i>'
      } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i> Menu <i class="fas fa-chevron-down"></i>'
      }
    })


    const menuItems = menuList.querySelectorAll("a")
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          menuList.classList.remove("show")
          menuBtn.innerHTML = '<i class="fas fa-bars"></i> Menu <i class="fas fa-chevron-down"></i>'
        }
      })
    })


    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        menuList.classList.remove("show")
        menuBtn.innerHTML = '<i class="fas fa-bars"></i> Menu <i class="fas fa-chevron-down"></i>'
      }
    })
  }
})


document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const menuItems = document.querySelectorAll(".menu__list--item a")

  menuItems.forEach((item) => {
    const href = item.getAttribute("href")

    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      (currentPage === "index.html" && href === "index.html")
    ) {
      item.classList.add("active")
      item.parentElement.classList.add("active")
    }
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".introduce")

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    { threshold: 0.1 },
  )

  sections.forEach((section) => {
    sectionObserver.observe(section)
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".work img")

  galleryImages.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      galleryImages.forEach((otherImg) => {
        if (otherImg !== img) {
          otherImg.style.opacity = "0.5"
          otherImg.style.transform = "scale(0.95)"
        }
      })
    })

    img.addEventListener("mouseleave", () => {
      galleryImages.forEach((otherImg) => {
        otherImg.style.opacity = ""
        otherImg.style.transform = ""
      })
    })
  })
})
