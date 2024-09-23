import { defineQuery, PortableText, type PortableTextReactComponents } from 'next-sanity';
import sanityFetch from '@/utils/sanity.fetch';

import type { FooterQueryTypes } from './Footer.types';

import Button from '@/components/ui/Button';
import CustomLink from '@/components/ui/CustomLink';

import styles from './Footer.module.css';

const components = {
  block: {
    normal: ({ children }) => <h2 className='large-text'>{children}</h2>,
  },
} as Partial<PortableTextReactComponents>;

export default async function Footer() {
  const {
    privacyPolicy,
    socials,
    footer: { heading, cta },
  } = await query();

  return (
    <footer className={`${styles.footer} max-width`}>
      <div className={styles.content}>
        <PortableText
          components={components}
          value={heading}
        />
        <Button data={cta} />
      </div>
      <div className={styles.links}>
        <p className={styles.copyright}>
          <span>Ⓒ Stworzone przez </span>
          <a
            href='https://kryptonum.eu/pl'
            target='_blank'
            rel='noreferrer'
          >
            {KryptonumLogo}
          </a>
        </p>
        <div className={styles['privacy-policy']}>
          <CustomLink
            href={privacyPolicy}
            text='Polityk prywatności'
            target='_blank'
            rel='noreferrer'
            className={styles.light}
          />
        </div>
        <ul className={styles['social-media']}>
          {Object.entries(socials).map(([platform, url]) => (
            <li key={platform}>
              <CustomLink
                href={url}
                text={platform}
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

const query = async () => {
  const footerQuery = defineQuery(`
    *[_id == 'global'][0] {
      privacyPolicy,
      socials {
        instagram,
        linkedin,
        facebook
      },
      footer {
        heading,
        cta
      }
    }
  `);

  return await sanityFetch<FooterQueryTypes>({ query: footerQuery });
};

const KryptonumLogo = (
  <svg
    width='112'
    height='24'
    viewBox='0 0 112 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M15.5712 11.9999C15.5711 12.8861 15.3003 13.753 14.792 14.4946C14.2837 15.2361 13.56 15.8201 12.7093 16.1751V23.8382H8.8934V16.173C8.04282 15.8186 7.31903 15.235 6.81073 14.4938C6.30242 13.7525 6.03168 12.8858 6.03168 11.9999C6.03168 11.114 6.30242 10.2473 6.81073 9.50606C7.31903 8.76482 8.04282 8.18123 8.8934 7.82681V0.161621H12.7093V7.82469C13.5602 8.17943 14.2841 8.76338 14.7924 9.50499C15.3007 10.2466 15.5714 11.1137 15.5712 11.9999Z'
      fill='url(#paint0_linear_7646_1687)'
    />
    <path
      d='M22.4211 0V5.46378L18.4357 9.26811L16.5285 7.44665L15.3003 8.61914C15.0206 8.28062 14.7002 7.97473 14.3456 7.70781L22.4211 0Z'
      fill='url(#paint1_linear_7646_1687)'
    />
    <path
      d='M18.4356 14.7319L22.421 18.5363V24L14.3464 16.2922C14.7008 16.0256 15.021 15.72 15.3005 15.3818L16.5284 16.5534L18.4356 14.7319Z'
      fill='url(#paint2_linear_7646_1687)'
    />
    <path
      d='M5.0791 11.9999C5.07672 13.2266 5.50942 14.418 6.30675 15.3801L1.26315 20.1955V14.7318L3.17128 12.9106V11.0891L1.26315 9.26798V3.8042L6.30675 8.61871C5.50915 9.58101 5.07643 10.7728 5.0791 11.9999Z'
      fill='#010104'
    />
    <path
      d='M35.28 17.5L30.688 12.412V17.5H29.232V6.348H30.688V11.516L35.296 6.348H37.136L32.08 11.932L37.184 17.5H35.28ZM39.6261 10.156C39.8821 9.65467 40.2448 9.26533 40.7141 8.988C41.1941 8.71067 41.7755 8.572 42.4581 8.572V10.076H42.0741C40.4421 10.076 39.6261 10.9613 39.6261 12.732V17.5H38.1701V8.732H39.6261V10.156ZM51.5309 8.732L46.2509 21.628H44.7469L46.4749 17.404L42.9389 8.732H44.5549L47.3069 15.836L50.0269 8.732H51.5309ZM53.8105 10.348C54.0985 9.84667 54.5252 9.43067 55.0905 9.1C55.6665 8.75867 56.3332 8.588 57.0905 8.588C57.8692 8.588 58.5732 8.77467 59.2025 9.148C59.8425 9.52133 60.3438 10.0493 60.7065 10.732C61.0692 11.404 61.2505 12.188 61.2505 13.084C61.2505 13.9693 61.0692 14.7587 60.7065 15.452C60.3438 16.1453 59.8425 16.684 59.2025 17.068C58.5732 17.452 57.8692 17.644 57.0905 17.644C56.3438 17.644 55.6825 17.4787 55.1065 17.148C54.5412 16.8067 54.1092 16.3853 53.8105 15.884V21.66H52.3545V8.732H53.8105V10.348ZM59.7625 13.084C59.7625 12.4227 59.6292 11.8467 59.3625 11.356C59.0958 10.8653 58.7332 10.492 58.2745 10.236C57.8265 9.98 57.3305 9.852 56.7865 9.852C56.2532 9.852 55.7572 9.98533 55.2985 10.252C54.8505 10.508 54.4878 10.8867 54.2105 11.388C53.9438 11.8787 53.8105 12.4493 53.8105 13.1C53.8105 13.7613 53.9438 14.3427 54.2105 14.844C54.4878 15.3347 54.8505 15.7133 55.2985 15.98C55.7572 16.236 56.2532 16.364 56.7865 16.364C57.3305 16.364 57.8265 16.236 58.2745 15.98C58.7332 15.7133 59.0958 15.3347 59.3625 14.844C59.6292 14.3427 59.7625 13.756 59.7625 13.084ZM64.143 9.932V15.1C64.143 15.5267 64.2337 15.8307 64.415 16.012C64.5963 16.1827 64.911 16.268 65.359 16.268H66.431V17.5H65.119C64.3083 17.5 63.7003 17.3133 63.295 16.94C62.8897 16.5667 62.687 15.9533 62.687 15.1V9.932H61.551V8.732H62.687V6.524H64.143V8.732H66.431V9.932H64.143ZM71.3791 17.644C70.5578 17.644 69.8111 17.4573 69.1391 17.084C68.4778 16.7107 67.9551 16.1827 67.5711 15.5C67.1978 14.8067 67.0111 14.0067 67.0111 13.1C67.0111 12.204 67.2031 11.4147 67.5871 10.732C67.9818 10.0387 68.5151 9.51067 69.1871 9.148C69.8591 8.77467 70.6111 8.588 71.4431 8.588C72.2751 8.588 73.0271 8.77467 73.6991 9.148C74.3711 9.51067 74.8991 10.0333 75.2831 10.716C75.6778 11.3987 75.8751 12.1933 75.8751 13.1C75.8751 14.0067 75.6725 14.8067 75.2671 15.5C74.8725 16.1827 74.3338 16.7107 73.6511 17.084C72.9685 17.4573 72.2111 17.644 71.3791 17.644ZM71.3791 16.364C71.9018 16.364 72.3925 16.2413 72.8511 15.996C73.3098 15.7507 73.6778 15.3827 73.9551 14.892C74.2431 14.4013 74.3871 13.804 74.3871 13.1C74.3871 12.396 74.2485 11.7987 73.9711 11.308C73.6938 10.8173 73.3311 10.4547 72.8831 10.22C72.4351 9.97467 71.9498 9.852 71.4271 9.852C70.8938 9.852 70.4031 9.97467 69.9551 10.22C69.5178 10.4547 69.1658 10.8173 68.8991 11.308C68.6325 11.7987 68.4991 12.396 68.4991 13.1C68.4991 13.8147 68.6271 14.4173 68.8831 14.908C69.1498 15.3987 69.5018 15.7667 69.9391 16.012C70.3765 16.2467 70.8565 16.364 71.3791 16.364ZM81.4215 8.572C82.4882 8.572 83.3522 8.89733 84.0135 9.548C84.6748 10.188 85.0055 11.116 85.0055 12.332V17.5H83.5655V12.54C83.5655 11.6653 83.3468 10.9987 82.9095 10.54C82.4722 10.0707 81.8748 9.836 81.1175 9.836C80.3495 9.836 79.7362 10.076 79.2775 10.556C78.8295 11.036 78.6055 11.7347 78.6055 12.652V17.5H77.1495V8.732H78.6055V9.98C78.8935 9.532 79.2828 9.18533 79.7735 8.94C80.2748 8.69467 80.8242 8.572 81.4215 8.572ZM94.5199 8.732V17.5H93.0639V16.204C92.7865 16.652 92.3972 17.004 91.8959 17.26C91.4052 17.5053 90.8612 17.628 90.2639 17.628C89.5812 17.628 88.9679 17.4893 88.4239 17.212C87.8799 16.924 87.4479 16.4973 87.1279 15.932C86.8185 15.3667 86.6639 14.6787 86.6639 13.868V8.732H88.1039V13.676C88.1039 14.54 88.3225 15.2067 88.7599 15.676C89.1972 16.1347 89.7945 16.364 90.5519 16.364C91.3305 16.364 91.9439 16.124 92.3919 15.644C92.8399 15.164 93.0639 14.4653 93.0639 13.548V8.732H94.5199ZM106.882 8.572C107.565 8.572 108.173 8.716 108.706 9.004C109.24 9.28133 109.661 9.70267 109.97 10.268C110.28 10.8333 110.434 11.5213 110.434 12.332V17.5H108.994V12.54C108.994 11.6653 108.776 10.9987 108.338 10.54C107.912 10.0707 107.33 9.836 106.594 9.836C105.837 9.836 105.234 10.0813 104.786 10.572C104.338 11.052 104.114 11.7507 104.114 12.668V17.5H102.674V12.54C102.674 11.6653 102.456 10.9987 102.018 10.54C101.592 10.0707 101.01 9.836 100.274 9.836C99.5169 9.836 98.9142 10.0813 98.4662 10.572C98.0182 11.052 97.7942 11.7507 97.7942 12.668V17.5H96.3382V8.732H97.7942V9.996C98.0822 9.53733 98.4662 9.18533 98.9462 8.94C99.4369 8.69467 99.9756 8.572 100.562 8.572C101.298 8.572 101.949 8.73733 102.514 9.068C103.08 9.39867 103.501 9.884 103.778 10.524C104.024 9.90533 104.429 9.42533 104.994 9.084C105.56 8.74267 106.189 8.572 106.882 8.572Z'
      fill='#010104'
    />
    <defs>
      <linearGradient
        id='paint0_linear_7646_1687'
        x1='15.3924'
        y1='0.161627'
        x2='5.43062'
        y2='0.417276'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282' />
        <stop
          offset='1'
          stopColor='#90F4E8'
        />
      </linearGradient>
      <linearGradient
        id='paint1_linear_7646_1687'
        x1='22.2697'
        y1='2.42239e-06'
        x2='13.8571'
        y2='0.466885'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282' />
        <stop
          offset='1'
          stopColor='#90F4E8'
        />
      </linearGradient>
      <linearGradient
        id='paint2_linear_7646_1687'
        x1='22.2696'
        y1='14.7319'
        x2='13.858'
        y2='15.1987'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#2DD282' />
        <stop
          offset='1'
          stopColor='#90F4E8'
        />
      </linearGradient>
    </defs>
  </svg>
);