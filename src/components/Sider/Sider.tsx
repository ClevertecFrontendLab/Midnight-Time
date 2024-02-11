import { Layout } from 'antd';
import { useState } from 'react';
import classes from './Sider.module.css';
import {
    CalendarTwoTone,
    MenuFoldOutlined,
    HeartFilled,
    TrophyFilled,
    IdcardOutlined,
} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const { Sider } = Layout;

// TODO вынести в отдельные компоненты
const logoSvg = () => (
    <svg
        width='426'
        height='107'
        viewBox='0 0 426 107'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M276.301 51.8624H291.229V61.6684H291.45C292.114 60.1363 293.109 58.6041 294.436 57.174C295.652 55.744 297.09 54.6204 298.748 53.5989C300.296 52.5774 302.066 51.8624 303.946 51.2495C305.715 50.7388 307.705 50.5345 309.696 50.4324C310.691 50.4324 311.797 50.6367 313.124 50.9431V64.4264C312.35 64.3243 311.465 64.2221 310.47 64.12C309.364 64.0178 308.369 63.9157 307.484 63.9157C304.609 63.9157 302.176 64.4264 300.186 65.2436C298.195 66.1629 296.537 67.3886 295.32 68.9208C294.104 70.453 293.219 72.1895 292.777 74.2324C292.224 76.2754 292.003 78.5226 292.003 80.8719V104.91H276.301V51.8624Z'
            fill='#10239E'
        />
        <path
            d='M255.155 72.5981C254.381 68.9208 253.054 66.1629 251.174 64.2221C249.295 62.3835 246.42 61.4642 242.66 61.362C240.116 61.362 238.015 61.7706 236.357 62.5878C234.698 63.4049 233.371 64.3243 232.376 65.4479C231.381 66.6736 230.717 67.8994 230.275 69.1251C229.833 70.453 229.611 71.5766 229.611 72.5981H255.155ZM229.611 81.7913C229.833 86.49 231.049 89.9629 233.482 92.0059C235.804 94.1509 239.232 95.1724 243.655 95.1724C246.751 95.1724 249.516 94.4574 251.838 93.0273C254.049 91.5973 255.487 89.9629 256.04 88.3286H269.862C267.651 94.6617 264.223 99.2582 259.689 101.914C255.045 104.672 249.516 106 243.102 106C238.568 106 234.477 105.387 230.938 104.059C227.289 102.731 224.193 100.79 221.76 98.3389C219.217 95.8874 217.227 93.0273 215.9 89.5544C214.573 86.1835 213.909 82.4041 213.909 78.3183C213.909 74.4367 214.573 70.7595 216.01 67.2865C217.337 63.9157 219.328 60.9534 221.981 58.5019C224.525 56.0504 227.621 54.0075 231.16 52.5774C234.698 51.1474 238.679 50.4324 243.102 50.4324C247.968 50.4324 252.17 51.3517 255.819 53.0882C259.357 54.8247 262.343 57.174 264.665 60.0341C266.987 62.9964 268.646 66.3672 269.752 70.0444C270.747 73.8238 271.079 77.7054 270.858 81.7913H229.611Z'
            fill='#10239E'
        />
        <path
            d='M194.62 104.91H177.149L157.677 51.8625H174.153L186.206 87.9202H186.427L198.481 51.8625H214.072L194.62 104.91Z'
            fill='#10239E'
        />
        <path
            d='M141.95 72.5981C141.176 68.9208 139.849 66.1629 137.969 64.2221C136.089 62.3835 133.214 61.4642 129.455 61.362C126.911 61.362 124.81 61.7706 123.152 62.5878C121.493 63.4049 120.166 64.3243 119.171 65.4479C118.176 66.6736 117.512 67.8994 117.07 69.1251C116.628 70.453 116.406 71.5766 116.406 72.5981H141.95ZM116.406 81.7913C116.628 86.49 117.844 89.9629 120.277 92.0059C122.599 94.1509 126.027 95.1724 130.45 95.1724C133.546 95.1724 136.311 94.4574 138.633 93.0273C140.844 91.5973 142.282 89.9629 142.835 88.3286H156.657C154.446 94.6617 151.018 99.2582 146.484 101.914C141.84 104.672 136.311 106 129.897 106C125.363 106 121.272 105.387 117.733 104.059C114.084 102.731 110.988 100.79 108.555 98.3389C106.012 95.8874 104.021 93.0273 102.695 89.5544C101.368 86.1835 100.704 82.4041 100.704 78.3183C100.704 74.4367 101.368 70.7595 102.805 67.2865C104.132 63.9157 106.122 60.9534 108.776 58.5019C111.32 56.0504 114.416 54.0075 117.954 52.5774C121.493 51.1474 125.474 50.4324 129.897 50.4324C134.763 50.4324 138.965 51.3517 142.614 53.0882C146.152 54.8247 149.138 57.174 151.46 60.0341C153.782 62.9964 155.441 66.3672 156.547 70.0444C157.542 73.8238 157.874 77.7054 157.652 81.7913H116.406Z'
            fill='#10239E'
        />
        <path d='M79.6172 29.3223H95.0983V104.91H79.6172V29.3223Z' fill='#10239E' />
        <path
            d='M56.2042 55.3278C55.8717 53.5064 55.2065 51.8874 54.2088 50.3696C53.1003 48.8517 51.8808 47.5363 50.3288 46.322C48.7769 45.2089 47.0031 44.2982 45.0077 43.6911C43.0123 43.084 41.0169 42.7804 38.9106 42.6792C34.9198 42.6792 31.5941 43.3875 28.9335 44.8042C26.1621 46.2208 23.945 48.0422 22.2822 50.3696C20.5084 52.6969 19.289 55.3278 18.513 58.2623C17.737 61.298 17.4045 64.3336 17.4045 67.4705C17.4045 70.5062 17.737 73.5418 18.513 76.3751C19.289 79.2084 20.5084 81.8393 22.2822 84.0655C23.945 86.3928 26.1621 88.2142 28.9335 89.6309C31.5941 91.0475 34.9198 91.6547 38.9106 91.6547C44.2317 91.6547 48.3334 90.238 51.3266 87.2024C54.3197 84.2679 56.2042 80.3215 56.8694 75.4644H73.7196C73.2761 80.0179 72.0567 84.0655 70.283 87.7083C68.3984 91.3511 65.9596 94.488 62.9665 97.0177C59.8625 99.6486 56.3151 101.571 52.3243 102.887C48.2226 104.303 43.7883 104.91 38.9106 104.91C32.8135 104.91 27.3815 104 22.5039 102.077C17.6262 100.155 13.6353 97.5236 10.3097 94.0832C6.98396 90.744 4.43426 86.7976 2.66056 82.2441C0.886852 77.6906 0 72.7323 0 67.4705C0 62.1075 0.886852 57.1492 2.66056 52.4945C4.43426 47.8398 6.98396 43.7923 10.3097 40.3519C13.6353 37.0126 17.6262 34.2805 22.5039 32.2567C27.3815 30.3342 32.8135 29.4235 38.9106 29.3223C43.234 29.3223 47.3357 29.9294 51.2157 31.0425C55.0957 32.2567 58.5322 33.8758 61.6362 36.1019C64.7402 38.3281 67.2899 40.959 69.2853 44.197C71.2807 47.4351 72.5001 51.1791 73.0544 55.3278H56.2042Z'
            fill='#10239E'
        />
        <path
            d='M409.192 36.1508H422.781V50.8038H409.192V78.8037C409.192 88.3334 409.781 88.3051 410.961 89.4215C412.14 90.5379 414.5 91.0962 418.038 91.0962C419.218 91.2357 420.25 91.0962 421.429 90.9566C422.461 90.9566 423.887 90.1661 424.624 89.4215V104.772C422.781 105.56 420.692 106.447 418.628 106.447C416.416 106.587 414.352 106.587 412.288 106.587C412.15 106.587 409.815 106.587 408.832 106.447C406.438 106.107 402.877 104.842 400.666 103.586C399.437 102.888 396.242 99.7485 395.874 98.3529C394.768 96.6085 394.153 93.1895 394.153 89.5611V50.8038H381.13V36.1508H394.153V11.729H409.192V36.1508Z'
            fill='#10239E'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M316.257 50.8039H326.578V104.912H343.091V50.8039H355.328L355.328 36.1508H343.091L343.091 34.8948C343.091 31.9642 343.681 29.1812 344.86 27.9252C346.04 26.6692 348.104 25.9715 351.053 25.9715C353.707 25.9715 356.213 26.111 358.719 26.3901V11.729L353.117 11.729L347.588 11.729C340.584 11.729 335.055 15.1096 331.738 18.3578C327.462 22.5444 326.578 27.359 326.578 33.6388L326.578 36.1508H316.257L316.257 50.8039ZM376.707 57.0837H360.636V104.912H376.707V57.0837Z'
            fill='#10239E'
        />
        <path
            d='M376.707 43.617C376.707 47.868 373.217 51.3141 368.966 51.3141C364.715 51.3141 361.226 47.868 361.226 43.617C361.226 39.366 364.715 35.9199 368.966 35.9199C373.217 35.9199 376.707 39.366 376.707 43.617Z'
            fill='#40A9FF'
        />
    </svg>
);
const logoSvgSmall = () => (
    <svg
        width='110'
        height='105'
        viewBox='0 0 110 105'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M93.403 35.4686H106.744V49.8451H93.403V77.3167C93.403 86.6666 93.9819 86.6388 95.1398 87.7342C96.2977 88.8295 98.6135 89.3772 102.087 89.3772C103.245 89.5141 104.258 89.3772 105.416 89.2403C106.429 89.2403 107.829 88.4647 108.553 87.7342V102.795C106.744 103.568 104.692 104.438 102.666 104.438C100.495 104.575 98.4688 104.575 96.4424 104.575C96.3068 104.575 94.0151 104.575 93.0502 104.438C90.6997 104.105 87.2042 102.864 85.0331 101.632C83.827 100.947 80.691 97.8663 80.3292 96.4971C79.2436 94.7856 78.6398 91.431 78.6398 87.8711V49.8451H65.8555V35.4686H78.6398V11.5076H93.403V35.4686Z'
            fill='#10239E'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.1709 49.8452H12.3025V102.932H28.5131V49.8452H40.5263L40.5262 35.4686H28.5131L28.5131 34.2363C28.5131 31.361 29.0921 28.6305 30.25 27.3982C31.4079 26.1659 33.4342 25.4813 36.3289 25.4813C38.9342 25.4813 41.3947 25.6182 43.8553 25.8921V11.5076L38.3553 11.5076L32.9276 11.5076C26.0525 11.5076 20.6248 14.8244 17.3683 18.0113C13.1709 22.1189 12.3025 26.8426 12.3025 33.004L12.3024 35.4686H2.17083L2.1709 49.8452ZM61.5131 56.0065H45.7368V102.932H61.5131V56.0065Z'
            fill='#10239E'
        />
        <path
            d='M61.5131 42.7939C61.5131 46.9647 58.0852 50.3457 53.9144 50.3457C49.7436 50.3457 46.3157 46.9646 46.3157 42.7939C46.3157 38.6231 49.7436 35.242 53.9144 35.242C58.0852 35.242 61.5131 38.6231 61.5131 42.7939Z'
            fill='#40A9FF'
        />
    </svg>
);
const logoSvgMobile = () => (
    <svg width='72' height='19' viewBox='0 0 72 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M46.6973 9.31022H49.2203V10.9754H49.2577C49.3699 10.7152 49.5381 10.455 49.7623 10.2122C49.9679 9.96935 50.2109 9.77855 50.4912 9.6051C50.7529 9.43164 51.0519 9.31022 51.3696 9.20615C51.6687 9.11942 52.0051 9.08473 52.3415 9.06738C52.5097 9.06738 52.6966 9.10207 52.9209 9.15411V11.4437C52.79 11.4264 52.6405 11.409 52.4723 11.3917C52.2854 11.3743 52.1172 11.357 51.9677 11.357C51.4818 11.357 51.0706 11.4437 50.7342 11.5825C50.3978 11.7386 50.1174 11.9467 49.9119 12.2069C49.7063 12.4671 49.5568 12.762 49.482 13.1089C49.3885 13.4558 49.3512 13.8374 49.3512 14.2364V18.3184H46.6973V9.31022Z'
            fill='#10239E'
        />
        <path
            d='M43.1235 12.8314C42.9927 12.2069 42.7684 11.7386 42.4507 11.409C42.133 11.0968 41.647 10.9407 41.0116 10.9234C40.5817 10.9234 40.2266 10.9927 39.9463 11.1315C39.666 11.2703 39.4417 11.4264 39.2735 11.6172C39.1053 11.8253 38.9931 12.0335 38.9184 12.2416C38.8436 12.4671 38.8062 12.6579 38.8062 12.8314H43.1235ZM38.8062 14.3925C38.8436 15.1904 39.0492 15.7801 39.4604 16.127C39.8529 16.4913 40.4322 16.6647 41.1798 16.6647C41.7031 16.6647 42.1704 16.5433 42.5628 16.3005C42.9366 16.0577 43.1796 15.7801 43.273 15.5026H45.6092C45.2354 16.578 44.6561 17.3586 43.8898 17.8096C43.1048 18.2779 42.1704 18.5034 41.0864 18.5034C40.3201 18.5034 39.6286 18.3993 39.0305 18.1738C38.4138 17.9483 37.8905 17.6188 37.4793 17.2025C37.0494 16.7862 36.713 16.3005 36.4888 15.7107C36.2645 15.1383 36.1523 14.4965 36.1523 13.8027C36.1523 13.1436 36.2645 12.5192 36.5074 11.9294C36.7317 11.357 37.0681 10.854 37.5167 10.4377C37.9465 10.0214 38.4698 9.67448 39.0679 9.43164C39.666 9.1888 40.3388 9.06738 41.0864 9.06738C41.9087 9.06738 42.6189 9.22349 43.2357 9.51837C43.8337 9.81324 44.3383 10.2122 44.7308 10.6979C45.1233 11.2009 45.4036 11.7733 45.5905 12.3977C45.7587 13.0395 45.8148 13.6987 45.7774 14.3925H38.8062Z'
            fill='#10239E'
        />
        <path
            d='M32.8924 18.3184H29.9394L26.6484 9.3103H29.4332L31.4703 15.4333H31.5077L33.5449 9.3103H36.1801L32.8924 18.3184Z'
            fill='#10239E'
        />
        <path
            d='M23.9907 12.8314C23.8599 12.2069 23.6356 11.7386 23.3179 11.409C23.0002 11.0968 22.5142 10.9407 21.8788 10.9234C21.4489 10.9234 21.0938 10.9927 20.8135 11.1315C20.5332 11.2703 20.3089 11.4264 20.1407 11.6172C19.9725 11.8253 19.8603 12.0335 19.7856 12.2416C19.7108 12.4671 19.6734 12.6579 19.6734 12.8314H23.9907ZM19.6734 14.3925C19.7108 15.1904 19.9164 15.7801 20.3276 16.127C20.72 16.4913 21.2994 16.6647 22.047 16.6647C22.5703 16.6647 23.0375 16.5433 23.43 16.3005C23.8038 16.0577 24.0468 15.7801 24.1402 15.5026H26.4764C26.1026 16.578 25.5232 17.3586 24.757 17.8096C23.972 18.2779 23.0375 18.5034 21.9535 18.5034C21.1873 18.5034 20.4958 18.3993 19.8977 18.1738C19.281 17.9483 18.7577 17.6188 18.3465 17.2025C17.9166 16.7862 17.5802 16.3005 17.3559 15.7107C17.1317 15.1383 17.0195 14.4965 17.0195 13.8027C17.0195 13.1436 17.1317 12.5192 17.3746 11.9294C17.5989 11.357 17.9353 10.854 18.3839 10.4377C18.8137 10.0214 19.337 9.67448 19.9351 9.43164C20.5332 9.1888 21.206 9.06738 21.9535 9.06738C22.7759 9.06738 23.4861 9.22349 24.1028 9.51837C24.7009 9.81324 25.2055 10.2122 25.598 10.6979C25.9905 11.2009 26.2708 11.7733 26.4577 12.3977C26.6259 13.0395 26.682 13.6987 26.6446 14.3925H19.6734Z'
            fill='#10239E'
        />
        <path d='M13.4561 5.48267H16.0726V18.3184H13.4561V5.48267Z' fill='#10239E' />
        <path
            d='M9.49833 9.89871C9.44212 9.58941 9.3297 9.31448 9.16108 9.05674C8.97371 8.79899 8.76762 8.57561 8.50531 8.36942C8.243 8.1804 7.94322 8.02576 7.60596 7.92266C7.26871 7.81956 6.93146 7.76801 6.57547 7.75083C5.90096 7.75083 5.33887 7.87111 4.8892 8.11167C4.42079 8.35223 4.04607 8.66153 3.76502 9.05674C3.46524 9.45195 3.25914 9.89871 3.12799 10.397C2.99683 10.9125 2.94062 11.428 2.94062 11.9607C2.94062 12.4762 2.99683 12.9917 3.12799 13.4728C3.25914 13.9539 3.46524 14.4007 3.76502 14.7787C4.04607 15.1739 4.42079 15.4832 4.8892 15.7238C5.33887 15.9643 5.90096 16.0674 6.57547 16.0674C7.47481 16.0674 8.16805 15.8269 8.67393 15.3114C9.17981 14.8131 9.49833 14.1429 9.61075 13.3181H12.4587C12.3837 14.0914 12.1776 14.7787 11.8778 15.3973C11.5593 16.0159 11.1471 16.5485 10.6412 16.9781C10.1166 17.4249 9.51707 17.7514 8.84256 17.9747C8.14932 18.2153 7.39987 18.3184 6.57547 18.3184C5.54497 18.3184 4.62689 18.1637 3.80249 17.8373C2.9781 17.5108 2.30359 17.064 1.7415 16.4798C1.17941 15.9128 0.748476 15.2426 0.448695 14.4694C0.148914 13.6962 -0.000976562 12.8542 -0.000976562 11.9607C-0.000976562 11.05 0.148914 10.208 0.448695 9.41758C0.748476 8.62716 1.17941 7.93984 1.7415 7.35562C2.30359 6.78858 2.9781 6.32463 3.80249 5.98097C4.62689 5.6545 5.54497 5.49985 6.57547 5.48267C7.30618 5.48267 7.99943 5.58576 8.6552 5.77478C9.31097 5.98097 9.89179 6.2559 10.4164 6.63393C10.941 7.01196 11.372 7.45871 11.7092 8.00857C12.0465 8.55843 12.2526 9.1942 12.3462 9.89871H9.49833Z'
            fill='#10239E'
        />
        <path
            d='M69.1589 6.64221H71.4557V9.13047H69.1589V13.8852C69.1589 15.5034 69.2585 15.4986 69.4579 15.6882C69.6572 15.8778 70.056 15.9726 70.654 15.9726C70.8534 15.9963 71.0278 15.9726 71.2272 15.9489C71.4016 15.9489 71.6426 15.8146 71.7672 15.6882V18.2949C71.4557 18.4287 71.1026 18.5793 70.7537 18.5793C70.3799 18.603 70.031 18.603 69.6822 18.603C69.6588 18.603 69.2642 18.603 69.0981 18.5793C68.6934 18.5216 68.0916 18.3068 67.7178 18.0935C67.5102 17.975 66.9702 17.4418 66.9079 17.2048C66.7211 16.9086 66.6171 16.328 66.6171 15.7119V9.13047H64.416V6.64221H66.6171V2.49512H69.1589V6.64221Z'
            fill='#10239E'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M53.4521 9.13047H55.1965V18.3186H57.9875V9.13047H60.0558L60.0558 6.64221H57.9875L57.9875 6.42894C57.9875 5.93129 58.0872 5.4587 58.2865 5.24542C58.4859 5.03214 58.8347 4.91365 59.3331 4.91365C59.7817 4.91365 60.2053 4.93735 60.6289 4.98474V2.49512L59.682 2.49512L58.7475 2.49512C57.5638 2.49512 56.6294 3.06918 56.0687 3.62076C55.346 4.33169 55.1965 5.14926 55.1965 6.21566L55.1965 6.64221H53.4521L53.4521 9.13047ZM63.6691 10.1969H60.9529V18.3186H63.6691V10.1969Z'
            fill='#10239E'
        />
        <path
            d='M63.6691 7.91006C63.6691 8.63192 63.0827 9.21711 62.3608 9.21711C61.6389 9.21711 61.0525 8.63192 61.0525 7.91005C61.0525 7.18819 61.6389 6.603 62.3608 6.603C63.0827 6.603 63.6691 7.18819 63.6691 7.91006Z'
            fill='#40A9FF'
        />
    </svg>
);
const exitSvg = () => (
    <svg width='15' height='16' viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M3.74621 7.39397V5.86897C3.74621 5.80112 3.66943 5.76183 3.61585 5.80469L0.919425 7.93683C0.90984 7.94439 0.902093 7.95402 0.896766 7.965C0.891439 7.97598 0.888672 7.98802 0.888672 8.00022C0.888672 8.01243 0.891439 8.02447 0.896766 8.03545C0.902093 8.04643 0.90984 8.05606 0.919425 8.06362L3.61585 10.1975C3.66764 10.2386 3.74621 10.2011 3.74621 10.1333V8.60826H10.6664V7.39397H3.74621Z'
            fill='black'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.62716 0.929688H14.0474C14.3242 0.929688 14.5474 1.1529 14.5474 1.42969V14.5725C14.5474 14.8493 14.3242 15.0725 14.0474 15.0725H4.62716C4.35038 15.0725 4.12716 14.8493 4.12716 14.5725V11.5725C4.12716 11.5333 4.15931 11.5011 4.19859 11.5011H5.27002C5.30931 11.5011 5.34145 11.5333 5.34145 11.5725V13.8583H13.3331V8.60826V7.39397V2.14397H5.34145V4.42969C5.34145 4.46897 5.30931 4.50112 5.27002 4.50112H4.19859C4.15931 4.50112 4.12716 4.46897 4.12716 4.42969V1.42969C4.12716 1.1529 4.35038 0.929688 4.62716 0.929688Z'
            fill='black'
        />
    </svg>
);
const LogoIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={logoSvg} {...props} />
);
const LogoIconSmall = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={logoSvgSmall} {...props} />
);
const LogoIconMobile = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={logoSvgMobile} {...props} />
);
const ExitIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={exitSvg} {...props} />
);

interface SidebarProps {
    width: number;
}

const SiderBar: React.FC<SidebarProps> = ({ width }) => {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(true);

    return (
        <Sider
            id='sider'
            width={`${width > 360 ? '208' : '106'}`}
            collapsed={!sideBarIsOpen}
            collapsedWidth={`${width > 700 ? '64' : '0'}`}
        >
            <div className={classes.container}>
                <div>
                    {sideBarIsOpen && width > 360 && <LogoIcon className={classes.logoIconFull} />}
                    {!sideBarIsOpen && width > 360 && (
                        <LogoIconSmall className={classes.logoIconSmall} />
                    )}
                    {sideBarIsOpen && width <= 360 && (
                        <LogoIconMobile className={classes.logoIconMobile} />
                    )}
                    <div className={classes.menuContainer}>
                        <div
                            className={classes.menuItem}
                            style={{ justifyContent: `${sideBarIsOpen ? '' : 'center'}` }}
                        >
                            {width > 700 && <CalendarTwoTone />}
                            {sideBarIsOpen && <p>Календарь</p>}
                        </div>
                        <div
                            className={classes.menuItem}
                            style={{ justifyContent: `${sideBarIsOpen ? '' : 'center'}` }}
                        >
                            {width > 700 && <HeartFilled />}
                            {sideBarIsOpen && <p>Тренировки</p>}
                        </div>
                        <div
                            className={classes.menuItem}
                            style={{ justifyContent: `${sideBarIsOpen ? '' : 'center'}` }}
                        >
                            {width > 700 && <TrophyFilled />}
                            {sideBarIsOpen && <p>Достижения</p>}
                        </div>
                        <div
                            className={classes.menuItem}
                            style={{ justifyContent: `${sideBarIsOpen ? '' : 'center'}` }}
                        >
                            {width > 700 && <IdcardOutlined />}
                            {sideBarIsOpen && <p>Профиль</p>}
                        </div>
                    </div>
                </div>
                <div className={classes.menuExit}>
                    {width > 700 && <ExitIcon width={16} height={16} />}
                    {sideBarIsOpen && (
                        <div>
                            <p>Выход</p>
                        </div>
                    )}
                </div>
            </div>
            {width > 700 && (
                <button
                    onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
                    className={classes.btnSliderDesctop}
                    data-test-id='sider-switch'
                >
                    <MenuFoldOutlined width={14} height={14} />
                </button>
            )}
            {width <= 700 && (
                <button
                    onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
                    className={classes.btnSliderMobile}
                    data-test-id='sider-switch-mobile'
                >
                    <MenuFoldOutlined width={14} height={14} />
                </button>
            )}
        </Sider>
    );
};
export default SiderBar;
