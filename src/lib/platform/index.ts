export const deviceWidth = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 480,
  tablet: 744,
  tabletL: 1024,
  laptopL: 1440,
  desktop: 2560
};

export const device = {
  mobileS: `(min-width: ${deviceWidth.mobileS}px)`,
  mobileM: `(min-width: ${deviceWidth.mobileM}px)`,
  mobileL: `(min-width: ${deviceWidth.mobileL}px)`,
  tablet: `(min-width: ${deviceWidth.tablet}px)`,
  tabletL: `(min-width: ${deviceWidth.tabletL}px)`,
  laptopL: `(min-width: ${deviceWidth.laptopL}px)`,
  desktop: `(min-width: ${deviceWidth.desktop}px)`
};

export const isMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = [
    'android',
    'iphone',
    'ipod',
    'windows phone',
    'webos',
    'blackberry',
    'mobile'
  ];

  // 檢查是否包含移動設備關鍵字
  const isMobileDevice = mobileKeywords.some((keyword) =>
    userAgent.includes(keyword)
  );

  // 檢查屏幕寬度
  const isMobileWidth = window.innerWidth < deviceWidth.tablet;

  return isMobileDevice || isMobileWidth;
};

export const isTablet = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const tabletKeywords = ['ipad', 'tablet'];

  // 檢查是否包含平板設備關鍵字
  const isTabletDevice = tabletKeywords.some((keyword) =>
    userAgent.includes(keyword)
  );

  // 檢查屏幕寬度是否在平板範圍內
  const isTabletWidth =
    window.innerWidth >= deviceWidth.tablet &&
    window.innerWidth <= deviceWidth.laptopL;

  return isTabletDevice || isTabletWidth;
};

// 添加一個新的響應式檢測函數
export const getDeviceType = () => {
  if (isMobile()) return 'mobile';
  if (isTablet()) return 'tablet';
  return 'desktop';
};
