import { useState } from "react";
import { Link } from "react-router-dom";
import ApplicantProfile from "./ApplicantProfile";
import seun from "./seun.jpeg";

function EditPersona() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState(false);
  const [education, setEducation] = useState(false);

  function handleIsOpen() {
    setIsOpen(!isOpen);
    setHistory(false);
    setEducation(false);
  }
  function handleStatus() {
    setHistory(!history);
    setIsOpen(false);
    setEducation(false);
  }
  function handleEducation() {
    setHistory(false);
    setIsOpen(false);
    setEducation(!education);
  }

  return (
    <>
      <div className="w-[100%] bg-[#fff] h-[220vh]">
        <Link onClick={() => window.scrollTo(0, 0)} to="/dashboard">
          <div className="fixed z-[99] top-0 opacity-90 bg-[#fff] h-[50px] w-[100%] pl-[45px] pt-[12px] mb-2">
            <svg className=" " width="180" height="50" viewBox="0 0 303 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M158 22.6821C157.281 22.724 156.604 22.825 156.056 23.6148C155.86 23.8985 155.413 23.9194 155 24C155.467 23.4533 156.08 23.0465 156.545 22.4603C157.128 21.7249 157.533 21.9236 158 22.6821Z" fill="#38761D" />
              <path d="M158.927 24C158.533 23.6977 158.264 23.3774 158 23C158.663 23.1627 159.32 23.3824 160 23.6096C159.66 23.743 159.356 23.8625 158.927 24Z" fill="#38761D" />
              <path
                d="M19.0905 30.1929C19.1634 30.1049 19.2363 30.0169 19.3185 29.788C18.7977 28.908 18.2201 28.9465 17.6805 29.7568C11.8101 29.7568 5.93982 29.7568 0 29.7568C0 26.5475 0 23.3454 0 20.0189C0.355947 20.0189 0.733797 20.0189 1.11164 20.0189C6.86951 20.0188 12.6281 19.9667 18.385 20.036C22.6652 20.0875 26.5984 21.3235 30.0156 23.5955C33.9082 26.1835 36.8118 29.5171 38.0901 33.7921C38.5542 35.3442 38.9107 36.9713 38.941 38.5699C39.0443 44.02 38.9805 49.4726 38.9805 55C35.3964 55 31.8292 55 28.0939 55C28.0939 54.7242 28.0939 54.3886 28.0939 54.0531C28.0939 48.9902 28.1106 43.9272 28.0769 38.8645C28.0715 38.0542 27.8404 37.2451 27.6893 36.28C22.3944 41.0338 17.251 45.6518 11.9972 50.3688C9.57767 48.173 7.25568 46.0658 4.96635 43.8568C5.04505 43.6333 5.0911 43.5117 5.17134 43.3264C9.58485 39.3178 13.9714 35.3793 18.3299 31.4159C18.682 31.0956 18.8415 30.6046 19.0905 30.1929Z"
                fill="#38761D"
                fillOpacity="0.8"
              />
              <path
                d="M52.0763 38.9187C52.0763 44.2575 52.0763 49.5962 52.0763 55C48.4409 55 44.8073 55 41.0224 55C41.0224 54.6935 41.0224 54.3557 41.0224 54.0179C41.0224 48.9932 40.9609 43.9677 41.0417 38.9439C41.1074 34.8611 42.5137 31.1049 45.3101 27.8397C48.4451 24.179 52.4872 21.6074 57.6345 20.5744C59.0793 20.2844 60.5736 20.0505 62.0484 20.0354C67.9525 19.9748 73.8579 20.0104 79.7629 20.0104C80.1572 20.0104 80.5515 20.0104 81 20.0104C81 23.2775 81 26.478 81 29.7806C74.9742 29.7806 68.963 29.7806 62.8257 29.6856C62.1556 29.148 60.1528 29.1026 59.8064 29.5707C59.7228 29.6836 59.9767 29.9904 60.0835 30.2813C60.2194 30.5289 60.3167 30.7302 60.4794 30.8739C65.4326 35.247 70.3894 39.6168 75.3592 43.9752C75.5956 44.1825 75.9552 44.2809 76.2575 44.43C76.2575 44.43 76.2381 44.439 76.2391 44.5172C76.238 44.7688 76.2359 44.9423 76.2338 45.1158C74.0418 47.0734 71.8497 49.0309 69.5082 50.9832C64.2979 46.5362 59.2372 42.0944 54.1762 37.6529C53.9203 37.4283 53.692 37.1657 53.3964 36.9932C52.9571 36.737 52.2108 36.2386 52.0472 36.9241C51.9077 37.5087 50.5149 38.3154 52.0763 38.9187Z"
                fill="#38761D"
                fillOpacity="0.8"
              />
              <path
                d="M214.263 46.9899C207.786 46.9899 201.429 46.9899 195 46.9899C195 35.0234 195 23.0985 195 11C203.029 11 211.095 11 219.218 11C219.218 12.6653 219.218 14.4432 219.218 16.304C213.699 16.304 208.193 16.304 202.627 16.304C202.627 19.5018 202.627 22.6178 202.627 25.817C207.265 25.817 211.896 25.817 216.588 25.817C216.588 27.6055 216.588 29.3122 216.588 31.1022C211.955 31.1022 207.323 31.1022 202.63 31.1022C202.63 34.6528 202.63 38.1211 202.63 41.4927C208.38 41.4927 214.129 41.4927 219.992 41.4927C219.992 42.9807 220.028 44.6651 219.949 46.3454C219.939 46.5709 219.363 46.9467 219.034 46.9607C217.486 47.0264 215.934 46.9899 214.263 46.9899Z"
                fill="#38761D"
                fillOpacity="0.8"
              />
              <path
                d="M268.346 46.6372C266.05 47.1541 263.855 46.7478 261.754 45.9514C258.733 44.8068 257.155 42.7084 257.012 39.8306C256.85 36.5738 258.333 34.0509 261.614 32.4614C263.822 31.3919 266.223 30.8727 268.73 30.6506C270.354 30.5066 271.961 30.2152 273.643 29.9805C273.643 29.0997 273.644 28.2542 273.642 27.4086C273.639 25.6187 272.654 24.8896 270.74 25.4819C267.468 26.4945 264.249 27.6408 260.767 28.8117C260.28 28.1362 259.553 27.2523 258.973 26.2993C257.796 24.3653 257.846 24.3785 260.134 23.3215C263.173 21.9179 266.36 20.8553 269.719 20.2975C272.15 19.8938 274.622 19.7478 276.956 20.8701C279.277 21.9859 280.696 23.7448 280.823 25.9703C281.087 30.6209 281.086 35.2853 281.093 39.9441C281.095 41.4382 281.635 42.5183 283.132 43.224C283.405 43.3529 283.631 43.5597 284 43.8138C282.638 44.9152 281.432 45.923 280.172 46.8743C279.971 47.0256 279.448 47.0407 279.205 46.9175C278.066 46.3406 276.972 45.6934 275.834 44.9198C275.461 43.7292 275.137 43.5695 274.176 44.1272C272.61 45.0368 271.055 45.9136 269.092 46.0065C268.831 46.0189 268.594 46.4175 268.346 46.6372ZM273.643 38.1032C273.643 37.1263 273.643 36.1493 273.643 35.0326C271.872 35.2417 270.206 35.2939 268.635 35.6617C266.786 36.0944 264.96 36.6461 264.393 38.6721C263.878 40.5128 264.918 41.9774 267.014 41.9158C267.77 41.8935 268.579 41.7645 269.259 41.4844C271.017 40.7595 272.752 39.9597 273.643 38.1032Z"
                fill="#38761D"
                fillOpacity="0.8"
              />
              <path
                d="M30.0974 14.6271C29.22 12.916 28.9048 11.1916 29.0243 9.37541C29.2481 5.97714 30.9513 3.35117 34.1301 1.60727C38.345 -0.705039 42.6183 -0.488695 46.597 2.03894C49.2848 3.74645 50.769 6.20514 50.9732 9.26283C51.1386 11.7411 50.5499 13.9916 48.8999 15.9769C46.8573 18.4346 44.1812 19.8111 40.7168 19.9813C37.0832 20.1598 34.0825 19.0613 31.6683 16.6471C31.082 16.0609 30.6607 15.3399 30.0974 14.6271Z"
                fill="#38761D"
                fillOpacity="0.8"
              />
              <path
                d="M303 43.6359C300.925 45.8787 298.19 46.8268 295.07 46.9771C293.42 47.0567 291.826 46.9683 290.357 46.064C288.638 45.0059 287.743 43.4664 287.666 41.7266C287.452 36.8958 287.465 32.0565 287.39 27.2206C287.383 26.7752 287.389 26.3296 287.389 25.8026C286.221 25.8026 285.133 25.8026 284 25.8026C284 24.1679 284 22.6156 284 20.9804C285.116 20.9804 286.204 20.9804 287.376 20.9804C287.376 17.9487 287.376 14.9981 287.376 12C289.694 12 291.924 12 294.243 12C294.243 14.9667 294.243 17.9172 294.243 20.9487C296.332 20.9487 298.334 20.9487 300.45 20.9487C300.45 22.3429 300.45 23.6577 300.327 25.0697C298.757 25.1669 297.309 25.1663 295.862 25.167C293.949 25.1679 293.578 25.499 293.577 27.2113C293.576 30.7327 293.535 34.2548 293.6 37.7752C293.622 38.9708 293.87 40.1695 294.099 41.3529C294.249 42.1246 295.151 42.5952 295.948 42.2897C296.771 41.9739 297.577 41.5629 298.284 41.0657C298.884 40.6431 299.297 40.5941 299.859 41.0763C300.881 41.9539 301.95 42.7852 303 43.6359Z"
                fill="#38761D"
                fillOpacity="0.8"
              />
              <path
                d="M235.895 25.9743C232.387 23.8746 229.663 25.9581 228.51 28.6274C227.824 30.213 227.325 31.9757 227.329 33.6576C227.336 36.1749 227.783 38.6747 229.896 40.7C231.07 41.8254 233.443 42.2394 234.971 41.4657C236.381 40.7516 237.685 39.861 238.975 38.9771C239.466 38.6405 239.767 38.4752 240.267 38.9283C241.472 40.0197 242.716 41.0761 244 42.1946C240.348 45.8422 236.121 47.6166 230.586 46.8069C224.585 45.929 220.986 41.2116 220.26 36.737C219.728 33.4567 219.957 30.2684 221.468 27.1995C223.386 23.3048 226.607 20.9005 231.379 20.1646C235.909 19.466 239.452 21.0495 242.523 23.8115C242.873 24.1259 243.122 24.5287 243.476 24.9623C242.205 26.0108 240.959 27.0393 239.545 28.0898C238.836 27.9589 238.294 27.806 237.753 27.6531C237.753 27.6531 237.675 27.6185 237.706 27.5165C237.471 26.5809 236.918 26.0396 235.895 25.9743Z"
                fill="#38761D"
                fillOpacity="0.8"
              />
              <path
                d="M246.006 19.3906C246.006 15.8781 246.006 12.4702 246.006 9C248.373 9 250.696 9 253.164 9C253.164 9.3426 253.164 9.71042 253.164 10.0783C253.164 19.4435 253.158 28.8087 253.175 38.1739C253.177 39.0263 253.226 39.8998 253.442 40.7255C253.73 41.826 254.803 42.094 255.937 42.1739C256.325 42.2012 256.718 42.1782 256.982 42.1782C256.982 43.5153 256.942 44.7822 256.998 46.046C257.03 46.7868 256.725 47.0211 255.896 46.9985C253.603 46.9362 251.31 46.844 249.232 45.8927C247.466 45.0842 246.339 43.6954 246.287 41.9984C246.099 35.8921 246.082 29.7818 246.008 23.6729C245.991 22.2804 246.006 20.8877 246.006 19.3906Z"
                fill="#38761D"
                fillOpacity="0.8"
              />
              <path
                d="M168 26.0925C168 20.3451 168 14.7036 168 9C169.056 9 170.063 9 171.161 9C171.161 14.9954 171.161 21.0102 171.161 27.183C172.521 26.1375 173.653 25.0944 174.978 24.2829C178.197 22.312 181.667 20.8134 185.764 20.7999C188.568 20.7907 190.93 22.3582 191.472 24.7042C191.768 25.9845 191.959 27.3041 191.97 28.6074C192.02 34.7098 191.992 40.8127 191.992 46.9874C190.959 46.9874 189.951 46.9874 188.777 46.9874C188.777 46.6657 188.777 46.2945 188.777 45.9233C188.777 39.9952 188.824 34.0665 188.735 28.1394C188.719 27.0171 188.386 25.8057 187.802 24.8053C187.032 23.4873 185.575 23.3142 183.178 23.8133C179.955 24.4844 177.252 25.9381 174.795 27.7863C174.465 28.035 174.098 28.2485 173.747 28.4775C171.885 29.6935 171.03 31.149 171.143 33.3032C171.381 37.8409 171.215 42.394 171.215 47C170.153 47 169.146 47 168 47C168 40.073 168 33.1357 168 26.0925Z"
                fill="#38761D"
              />
              <path
                d="M126.529 20.2116C129.919 19.6338 133.025 20.2205 135.649 22.2036C138.082 24.0424 139.261 26.5138 139.636 29.2876C139.79 30.4303 139.873 31.5805 140 32.8493C139.43 32.8493 139.041 32.8493 138.651 32.8493C132.667 32.8493 126.684 32.8493 120.7 32.8493C119.15 32.8493 119.276 32.8527 119.231 34.223C119.16 36.3645 119.677 38.3744 120.789 40.2317C122.128 42.4687 124.224 43.7839 127.16 44.2131C131.188 44.8022 134.307 43.4985 137.004 41.0444C137.365 40.7157 137.662 40.3323 137.987 39.9767C138.686 40.6478 139.222 41.1621 139.837 41.7518C138.821 43.1923 137.178 44.285 135.515 45.3578C131.809 47.749 124.587 47.4755 121.097 44.8851C118.426 42.9024 116.987 40.3606 116.4 37.477C115.744 34.257 115.844 31.0006 117.08 27.8475C117.232 27.4593 117.435 27.0866 117.784 26.6687C118.465 25.7751 118.976 24.9196 119.488 24.064C119.488 24.064 119.499 24.0813 119.576 24.0735C120.03 23.874 120.497 23.752 120.767 23.4789C122.132 22.0998 123.818 21.2448 125.829 20.822C126.102 20.7645 126.297 20.422 126.529 20.2116ZM133.314 24.17C133.112 24.0661 132.901 23.973 132.709 23.8567C130.792 22.7013 128.645 22.4638 126.493 22.9822C122.473 23.9506 120.925 26.8371 119.701 30.0678C125.364 30.0678 130.858 30.0682 136.351 30.065C136.466 30.0649 136.581 30.0222 136.768 29.9852C136.229 27.8095 135.304 25.8386 133.314 24.17Z"
                fill="#38761D"
              />
              <path
                d="M104.898 46.6699C103.836 46.8457 102.78 46.9193 101.623 47C101.623 35.8865 101.623 24.9283 101.623 13.9229C97.7164 13.9229 93.9013 13.9229 90 13.9229C90 12.9455 90 12.0122 90 11C98.923 11 107.919 11 117 11C117 11.8667 117 12.8008 117 13.8203C113.072 13.8203 109.072 13.8203 104.904 13.8203C104.904 24.7919 104.904 35.6798 104.898 46.6699Z"
                fill="#38761D"
              />
              <path
                d="M164 43.7584C161.866 45.6353 159.459 46.8617 156.387 46.9867C153.287 47.1128 150.581 46.3475 148.318 44.4652C146.363 42.8397 145.152 40.7016 144.604 38.378C143.59 34.0825 143.724 29.8095 146.006 25.8148C148.438 21.558 152.305 19.5488 157.638 20.0851C158.055 20.4189 158.415 20.5875 158.768 20.7681C159.989 21.3942 161.212 22.0189 162.427 22.6564C162.813 22.8592 163.175 23.1005 163.549 23.3241C163.766 24.0994 163.766 24.0994 162.388 25.3099C161.661 24.8163 160.938 24.2784 160.166 23.808C156.649 21.6658 152.343 22.4305 149.927 25.5753C146.411 30.1505 146.221 35.0362 148.642 39.9866C150.019 42.8013 152.478 44.6493 156.096 44.3295C157.464 44.2086 158.775 43.5368 160.285 43.1683C160.806 43.1107 161.273 43.0945 161.479 42.8735C162.052 42.2584 162.76 42.1797 163.544 42.2177C163.544 42.2177 163.525 42.2277 163.527 42.3013C163.687 42.836 163.843 43.2972 164 43.7584Z"
                fill="#38761D"
              />
              <path
                d="M303 44C301.941 43.1516 300.929 42.2952 299.961 41.391C299.429 40.8942 299.038 40.9446 298.47 41.3801C297.801 41.8923 297.037 42.3157 296.258 42.6411C295.504 42.9558 294.649 42.471 294.507 41.676C294.29 40.4567 294.056 39.2218 294.035 37.99C293.973 34.3631 294.012 30.7345 294.013 27.1065C294.014 25.3424 294.365 25.0012 296.176 25.0003C297.547 24.9997 298.918 25.0002 300.388 25.0002C300.645 25.5437 300.403 25.6665 299.888 25.6584C298.193 25.6321 296.498 25.6485 294.717 25.6485C294.698 25.9835 294.666 26.2917 294.666 26.6C294.663 30.9885 294.664 35.377 294.664 39.7655C294.664 39.9094 294.619 40.0721 294.671 40.194C294.962 40.8764 295.113 41.8215 295.637 42.1326C296.01 42.3541 296.899 41.7233 297.553 41.4609C297.711 41.3975 297.855 41.294 297.998 41.1972C298.507 40.8511 299.065 40.1677 299.507 40.2367C300.031 40.3184 300.478 41.0234 300.913 41.4997C301.649 42.3067 302.349 43.1462 303 44Z"
                fill="#38761D"
              />
              <path
                d="M51.7443 39.2747C50.1718 38.7541 51.558 37.94 51.6968 37.3501C51.8596 36.6583 52.6024 37.1613 53.0396 37.4198C53.3338 37.5939 53.561 37.8589 53.8157 38.0855C58.8527 42.5677 63.8893 47.0501 69 51.5631C68.5647 52.432 68.2052 51.789 67.8552 51.477C62.9026 47.0626 57.9555 42.6432 53.0143 38.2185C52.7381 37.9712 52.5247 37.6679 52.1031 37.1862C51.9536 38.0653 51.8582 38.6259 51.7443 39.2747Z"
                fill="#38761D"
              />
              <path
                d="M75 44C74.7287 43.926 74.3936 43.8287 74.1732 43.6237C69.5417 39.3135 64.9223 34.992 60.3063 30.6673C60.1546 30.5252 60.064 30.3262 60 30.0794C60.0968 30.0034 60.1386 30.0017 60.1803 30C65.0993 34.5774 70.0186 39.1546 74.9342 43.7352C74.9776 43.7757 74.9722 43.8618 75 44Z"
                fill="#38761D"
              />
              <path
                d="M19 30C18.8298 30.402 18.6744 30.9148 18.3312 31.2492C14.0827 35.3879 9.80685 39.5006 5.4331 43.6924C5.21876 43.8432 5.10938 43.9216 5 44C5.11257 43.7017 5.13942 43.3217 5.35033 43.1172C9.86362 38.7422 14.3975 34.387 19 30Z"
                fill="#38761D"
              />
              <path
                d="M127 20C126.866 20.2589 126.667 20.7041 126.388 20.7788C124.337 21.3285 122.617 22.4402 121.225 24.2332C120.949 24.5882 120.473 24.7468 120 25C121.036 23.1699 122.528 21.7994 124.309 20.8741C125.117 20.4544 126.031 20.2932 127 20Z"
                fill="#38761D"
              />
              <path d="M163 24C162.63 23.8076 162.258 23.4945 161.862 23.2314C160.615 22.4041 159.361 21.5936 158.107 20.7812C157.745 20.5468 157.376 20.328 157 20C159.439 20.3251 161.478 21.5796 163 24Z" fill="#38761D" />
              <path d="M59.5942 29.9077C59.5227 29.9945 59.4768 29.9963 59.3619 30C59.1916 29.775 58.9311 29.4552 59.0169 29.3374C59.3723 28.8495 61.4271 28.8968 62 29.4401C61.2164 29.6222 60.4181 29.7225 59.5942 29.9077Z" fill="#38761D" />
              <path d="M163 42.6821C162.281 42.724 161.604 42.825 161.056 43.6148C160.86 43.8985 160.413 43.9194 160 44C160.467 43.4533 161.08 43.0465 161.545 42.4603C162.128 41.7249 162.533 41.9236 163 42.6821Z" fill="#38761D" />
              <path d="M120 25C119.44 25.6503 118.777 26.3232 118 27C118.556 26.3435 119.227 25.683 120 25Z" fill="#38761D" />
              <path d="M238 28C238.598 28.0712 239.243 28.1882 240 28.3078C239.775 28.5244 239.44 28.7384 239.03 29C238.671 28.6517 238.36 28.3487 238 28Z" fill="#38761D" />
              <path d="M18 29.9723C18.2834 28.7163 18.6572 28.6579 19 29.9094C18.6885 30.0245 18.3771 30.0109 18 29.9723Z" fill="#38761D" />
              <path d="M237 27C237.563 26.9987 237.877 27.3746 238 28C237.654 27.7132 237.335 27.3799 237 27Z" fill="#38761D" />
              <path d="M163.463 44C163.267 43.6977 163.132 43.3774 163 43C163.331 43.1627 163.66 43.3824 164 43.6096C163.83 43.743 163.678 43.8625 163.463 44Z" fill="#38761D" />
              <path
                d="M273 39.2163C272.145 41.0093 270.481 41.8225 268.794 42.5596C268.142 42.8443 267.365 42.9755 266.639 42.9981C264.628 43.0607 263.631 41.5717 264.125 39.7002C264.669 37.6404 266.421 37.0795 268.195 36.6395C269.702 36.2656 271.301 36.2126 273 36C273 37.1353 273 38.1286 273 39.2163Z"
                fill="white"
              />
              <path
                d="M133.62 25.2306C135.542 26.5457 136.464 28.1555 137 29.9325C136.814 29.9627 136.7 29.9976 136.585 29.9977C131.113 30.0003 125.641 30 120 30C121.219 27.3612 122.762 25.0036 126.766 24.2127C128.909 23.7893 131.048 23.9833 132.957 24.927C133.149 25.0219 133.359 25.098 133.62 25.2306Z"
                fill="white"
              />
            </svg>
          </div>
        </Link>

        <div className="  flex ml-[80px] pt-[101px]">
          <ApplicantProfile />

          <div className="flex ml-[12rem] 5xl:w-[1500px] 5xl:justify-evenly 4xl:w-[1700px] 4xl:justify-between">
            <div className="w-[600px] mr-[50px] 5xl:w-[950px] 4xl:w-[1000px]">
              <div className="flex items-center justify-between">
                <img className=" rounded-[50%] w-[68px] h-[68px] " src={seun} alt="persona" />
                <Link onClick={() => window.scrollTo(0, 0)} to="">
                  <h2 className=" text-[14px]  text-[#38761D]">Save Profile</h2>
                </Link>
              </div>
              <form className="mt-[32px]">
                <label className="text-[14px] text-[#98A2B3]" htmlFor="name">
                  Full Name
                </label>
                <br />
                <input className=" mb-[20px] outline-none rounded-[4px] text-[14px] mt-[14.5px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px] 4xl:w-[1000px]" type="text" placeholder="Oluwaseun Orofin" />
                <br />
                <label className="text-[14px] text-[#98A2B3]" htmlFor="about">
                  About You
                </label>
                <br />
                <input
                  className="  mb-[20px] outline-none rounded-[4px] text-[14px] mt-[14.5px] text-[#667085] pl-[14px] w-[600px] h-[72px] border-[1px] border-[#D0D5DD] placeholder:w-[500px] placeholder:h-[50px] 5xl:w-[950px] 4xl:w-[1000px]"
                  type="text"
                  placeholder="Seun is a UI/UX designer experienced in gathering and evaluating user requirements, collaborating with product managers and engineers. "
                />
                <br />
                <label className="text-[14px] text-[#98A2B3]" htmlFor="number">
                  Phone Number
                </label>
                <br />
                <input className=" mb-[20px] outline-none rounded-[4px] text-[14px] mt-[14.5px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px] 4xl:w-[1000px] " type="tel" placeholder="081234567890" />
                <br />
                <label className="text-[14px] text-[#98A2B3]" htmlFor="email">
                  Email Address
                </label>
                <br />
                <input className=" mb-[20px] outline-none rounded-[4px] text-[14px] mt-[14.5px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px] 4xl:w-[1000px]" type="email" placeholder="seun@gmail.com" />
              </form>

              <div className=" w-[601px] mt-[26px] pl-[10px] h-[51px]  border-b-[#F3F3F3]  border-b-[1.5px] 4xl:w-[1000px]">
                <div className=" flex justify-between text-[16px]  w-[400px]">
                  <div>
                    <h3 onClick={handleIsOpen} className={isOpen ? " h-[40px] w-[80px] cursor-pointer  text-[16px] text-[#38761D]" : " w-[80px] h-[40px] cursor-pointer text-[16px] text-[#7D90B8]"}>
                      Portfolio
                    </h3>
                  </div>
                  <h3 onClick={handleStatus} className={history ? " h-[40px] w-[200px] cursor-pointer  text-[16px] text-[#38761D]" : " w-[200px] h-[40px] cursor-pointer text-[16px] text-[#7D90B8]"}>
                    Employment History
                  </h3>
                  <h3 onClick={handleEducation} className={education ? " h-[40px] w-[80px] cursor-pointer  text-[16px] text-[#38761D]" : " w-[80px] h-[40px] cursor-pointer text-[16px] text-[#7D90B8]"}>
                    Education
                  </h3>
                </div>
              </div>
              {isOpen && (
                <div className=" ml-[10px]">
                  <div className=" w-[65px] border-[3px] rounded-lg h-0 border-[#38761D]  ">{/* hi */}</div>
                  <div className="w-[600px] mt-[36px]">
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="name">
                      Role
                    </label>
                    <br />
                    <input className="  outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px]" type="text" placeholder="Product Designer" />
                    <br />
                  </div>
                  <div className=" mt-[12px]">
                    <h3 className=" text-[16px] font-[300] text-[#7D90B8] ">Primary Skills</h3>
                    <div className="mt-[6px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD]  rounded-[4px] 5xl:w-[950px]">
                      <div className="flex justify-evenly mt-[4px] items-center w-[320px]">
                        <h3 className="w-[74px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">REACT.JS</h3>
                        <h3 className="w-[109.23px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">REACT.NATIVE</h3>
                        <h3 className="w-[94.09px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">JAVASCRIPT</h3>
                      </div>
                    </div>
                  </div>
                  <div className=" mt-[12px]">
                    <h3 className=" text-[16px] font-[300] text-[#7D90B8] "> Other skills </h3>
                    <div className="mt-[6px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD]  rounded-[4px] 5xl:w-[950px]">
                      <div className="flex justify-evenly mt-[4px] items-center w-[320px]">
                        <h3 className="w-[74px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">REACT.JS</h3>
                        <h3 className="w-[109.23px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">REACT.NATIVE</h3>
                        <h3 className="w-[94.09px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">JAVASCRIPT</h3>
                      </div>
                    </div>
                  </div>
                  <div className="w-[600px] mt-[12px]">
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="name">
                      Skill Level
                    </label>
                    <br />
                    <input className="  outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px]" type="text" placeholder="Intermediate" />
                    <br />
                  </div>
                  <div className="mt-[12px]">
                    <h4 className=" text-[#1E2757] font-[500] mt-[10px] text-[18px] ">Portfolio Links</h4>
                  </div>
                  <div className="w-[600px] mt-[12px]">
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="websit">
                      Website
                    </label>
                    <br />
                    <input className="  outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px]" type="url" placeholder="www.website.com" />
                    <br />
                  </div>
                  <div className="w-[600px] mt-[12px]">
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="website">
                      LinkedIn
                    </label>
                    <br />
                    <input className="  outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px]" type="url" placeholder="https//www.website.com" />
                    <br />
                  </div>
                </div>
              )}
              {history && (
                <div className=" ml-[10px]">
                  <div className=" ml-[98px] w-[172px] border-[3px] rounded-lg h-0 border-[#38761D]  ">{/* hi */}</div>
                  <form className=" mt-[26px]">
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="name">
                      Role
                    </label>
                    <br />
                    <input className=" mb-[12px] outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px]" type="text" placeholder="Product Designer" />
                    <br />
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="company">
                      Company
                    </label>
                    <br />
                    <input className=" mb-[12px] outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px] " type="text" placeholder="TechEclat" />
                    <br />
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="industry">
                      Industry
                    </label>
                    <br />
                    <input className=" mb-[12px] outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px]" type="text" placeholder="Information Technology & Services" />
                    <br />
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="job-type">
                      Job Type
                    </label>
                    <br />
                    <input className=" mb-[12px] outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px]" type="text" placeholder="Full Time" />
                    <br />
                    <div className="mt-[12px]">
                      <h4 className=" text-[#1E2757] font-[500] mt-[10px] text-[18px] ">Portfolio Links</h4>
                    </div>
                    <div className="flex w-[600px] mt-[12px] justify-between 5xl:w-[950px]">
                      <div>
                        <label className="text-[14px] text-[#98A2B3]" htmlFor="duration">
                          Duration
                        </label>
                        <br />
                        <input className=" mb-[12px] outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] pr-[14px] w-[296px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[455px]" type="date" placeholder="22-08-2023" />
                      </div>
                      <div>
                        <label className="text-[14px] text-[#98A2B3]" htmlFor="duration">
                          Duration
                        </label>
                        <br />
                        <input className=" mb-[12px] outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] pr-[14px] w-[296px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[455px] " type="date" placeholder="22-08-2023" />
                      </div>
                    </div>
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="job-description">
                      Job Description
                    </label>
                    <br />
                    <div className=" mb-[12px] rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] pt-[16px]  w-[600px] h-[72px] border-[1px] border-[#D0D5DD] 5xl:w-[950px] 5xl:pr-[10px]">
                      <h4>Seun is a UI/UX designer experienced in gathering and evaluating user requirements, collaborating with product managers and engineers. </h4>
                    </div>
                    <br />
                  </form>
                </div>
              )}
              {education && (
                <div className=" ml-[10px]">
                  <div className=" ml-[325px] w-[80px] border-[3px] rounded-lg h-0 border-[#38761D]  ">{/* hi */}</div>
                  <form className=" mt-[26px]">
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="name">
                      University Name
                    </label>
                    <br />
                    <input className=" mb-[12px] outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px]" type="text" placeholder="Product Designer" />
                    <br />
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="course">
                      Course Name
                    </label>
                    <br />
                    <input className=" mb-[12px] outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px]" type="text" placeholder="Computer Science" />
                    <br />
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="Certificate">
                      Certificate
                    </label>
                    <br />
                    <input className=" mb-[12px] outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px]" type="text" placeholder="B.S.c" />
                    <br />
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="job-type">
                      Job Type
                    </label>
                    <br />
                    <input className=" mb-[12px] outline-none rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[600px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[950px]" type="text" placeholder="Full Time" />
                    <br />
                    <div className="mt-[12px]">
                      <h4 className=" text-[#1E2757] font-[500] mt-[10px] text-[18px] ">Portfolio Links</h4>
                    </div>
                    <div className="flex w-[600px] mt-[12px] justify-between 5xl:w-[950px]">
                      <div>
                        <label className="text-[14px] text-[#98A2B3]" htmlFor="duration">
                          Duration
                        </label>
                        <br />
                        <input className=" mb-[12px] outline-none rounded-[4px] pr-[14px] text-[14px] mt-[6px] text-[#667085] pl-[14px] w-[296px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[455px]" type="date" placeholder="22-08-2023" />
                      </div>
                      <div>
                        <label className="text-[14px] text-[#98A2B3]" htmlFor="duration">
                          Duration
                        </label>
                        <br />
                        <input className=" mb-[12px] outline-none rounded-[4px] text-[14px] mt-[6px] pr-[14px] text-[#667085] pl-[14px] w-[296px] h-[37px] border-[1px] border-[#D0D5DD] 5xl:w-[455px] " type="date" placeholder="22-08-2023" />
                      </div>
                    </div>
                    <label className="text-[14px] text-[#98A2B3]" htmlFor="job-description">
                      Job Description
                    </label>
                    <br />
                    <div className=" mb-[12px] rounded-[4px] text-[14px] mt-[6px] text-[#667085] pl-[14px] pt-[16px] w-[600px] h-[72px] border-[1px] border-[#D0D5DD] 5xl:w-[950px] 5xl:pr-[10px] ">
                      <h4>Seun is a UI/UX designer experienced in gathering and evaluating user requirements, collaborating with product managers and engineers. </h4>
                    </div>
                    <br />
                  </form>
                </div>
              )}
            </div>
            <div className="w-[300px] mt-[-30px] mr-[30px]">
              <div className="flex w-[200px] ml-[100px] justify-between items-center">
                <img className="w-[39.6px] rounded-[50%] h-[40.42px]" src={seun} alt="persona" />
                <h3 className=" text-[#1E2757] text-[14px]">Your profile status</h3>
              </div>
              <div className="bg-[#ECF2E9] pt-[20px] pl-[18px] h-[340px] mt-[21px] rounded-[20px]">
                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M28.4259 15.8028L13.869 19.9085C13.7466 19.9431 13.6376 20.0142 13.5566 20.1123C13.4756 20.2105 13.4265 20.331 13.4159 20.4578C13.4052 20.5846 13.4336 20.7116 13.497 20.8219C13.5605 20.9322 13.6562 21.0204 13.7711 21.0749L20.4595 24.2431C20.5899 24.3049 20.695 24.4099 20.7568 24.5404L23.9249 31.2287C23.9794 31.3437 24.0677 31.4393 24.1779 31.5028C24.2882 31.5663 24.4152 31.5946 24.542 31.584C24.6688 31.5733 24.7894 31.5242 24.8875 31.4433C24.9857 31.3623 25.0568 31.2533 25.0913 31.1308L29.1971 16.574C29.2272 16.467 29.2284 16.354 29.2003 16.2465C29.1723 16.139 29.1161 16.0409 29.0375 15.9624C28.9589 15.8838 28.8609 15.8276 28.7534 15.7995C28.6459 15.7715 28.5328 15.7726 28.4259 15.8028Z"
                    stroke="#38761D"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M20.6611 24.3392L24.1967 20.8037" stroke="#38761D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="22.5" cy="22.5" r="22.5" fill="#38761D" fill-opacity="0.2" />
                </svg>
                <h2 className=" text-[18px] text-[#38761D] mt-[16px] ">Weekly newsletter</h2>

                <p className=" mt-[10px] text-[14px] w-[250px] text-[#7D90B8]">We’ll keep you updated when the best new remote jobs pop up on Techeclat</p>
                <form>
                  <input className=" pl-[10px] outline-none text-[#7D90B8] text-[14px] h-[45px] bg-[#fff] rounded-[10px] mt-[8px] w-[250px] border-[#97A6C6] border-[1px] border-opacity-[50%] " type="email" placeholder="Enter your email" />
                  <button type="submit" className="w-[250px] mt-[36px] h-[45px] rounded-[50px] text-[16px] font-[400] text-[#fff] bg-[#38761D] ">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPersona;
