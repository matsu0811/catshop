// 画像のパス
const img = "./images/";

new Vue({
  data() {
    return {
      cats: {
        // 配列[0]画像、[1]猫の種類、[2]価格、[3]クラス(猫の分類)
        cat1: [`${img}cat1.jpg`, "猫1", "10000円", "all kitten brown"],
        cat2: [`${img}cat2.jpg`, "猫2", "90000円", "all kitten gray"],
        cat3: [`${img}cat3.jpg`, "猫3", "30000円", "all kitten gray"],
        cat4: [`${img}cat4.jpg`, "猫4", "80000円", "all kitten white"],
        cat5: [`${img}cat5.jpg`, "猫5", "50000円", "all cat gray"],
        cat6: [`${img}cat6.jpg`, "猫6", "70000円", "all cat gray"],
        cat7: [`${img}cat7.jpg`, "猫7", "70000円", "all cat brown"],
        cat8: [`${img}cat8.jpg`, "猫8", "50000円", "all cat white"],
        cat9: [`${img}cat9.jpg`, "猫9", "20000円", "all kitten gray"],
      },
    };
  },

  methods: {
    all() {
      const elements = document.querySelectorAll(".all");
      elements.forEach((element) => {
        if (element.classList.contains("all")) {
          element.classList.remove("hide");
          element.classList.add("show");
        }
      });
    },
    listChange(list) {
      const elements = document.querySelectorAll(".all");
      elements.forEach((element) => {
        if (!element.classList.contains(list)) {
          element.classList.remove("show");
          element.classList.add("hide");
        } else {
          element.classList.remove("hide");
          element.classList.add("show");
        }
      });
    },
  },
}).$mount("#cats-lists");
