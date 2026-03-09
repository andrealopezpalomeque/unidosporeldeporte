import { useState, useEffect, useRef, useCallback } from "react";
import { Handshake, Building2, HeartPulse, Wallet, Scale, Trophy, Users, HeartHandshake, MapPin, Mail, ArrowRight } from "lucide-react";

/* ═══════════════════════════════════════════
   PALETTE & TOKENS
   ═══════════════════════════════════════════ */
const C = {
  white: "#fcfcfc",
  dark: "#4a4d55",
  slate: "#647189",
  blue: "#7e96be",
  light: "#98bbf3",
  bg: "#f2f3f6",
  heroBg: "#e8ecf3",
};

/* ═══════════════════════════════════════════
   LOGO ICON (vectorized figure/flame)
   ═══════════════════════════════════════════ */
const ICON_PATH = "M 971.889 85.3361 C 1031.35 81.2666 1090.76 217.687 1107.15 264.946 C 1112.87 281.433 1130.26 375.687 1137.21 379.737 C 1170.87 381.37 1157.2 248.81 1154.89 224.823 C 1154.52 220.977 1156.88 210.989 1159.03 207.986 C 1198.33 154.365 1259.84 234.503 1282.05 265.898 C 1354.24 367.948 1374.86 507.278 1326.05 623.498 C 1325.01 625.255 1321.94 629.676 1319.62 629.341 C 1306.42 627.435 1278.91 621.635 1268.6 614.367 C 1266.81 608.948 1278.42 579.957 1280.98 571.237 C 1304.09 492.255 1292.34 410.346 1255.46 337.55 C 1250.29 327.35 1244.64 317.401 1238.53 307.737 C 1236.59 304.711 1223.11 283.737 1221.94 282.784 C 1219.07 287.024 1219.93 322.465 1219.29 331.634 C 1218.64 341.436 1217.37 351.187 1215.48 360.827 C 1206.69 406.141 1179.02 451.461 1125.6 441.74 C 1071.7 431.932 1071.02 367.772 1061.29 324.859 C 1048.52 268.598 1027.15 222.327 995.989 174.065 C 990.277 198.654 987.69 224.087 982.471 248.837 C 973.091 293.323 943.156 413.429 904.225 437.742 C 894.143 444.039 882.509 446.116 870.95 443.155 C 845.154 436.546 835.746 413.154 824.615 391.835 C 818.258 379.656 811.787 367.633 804.811 355.797 C 790.934 411.761 763.313 458.43 758.524 519.427 C 754.822 566.564 762.016 612.071 793.637 649.487 C 806.132 648.619 816.569 646.088 828.808 644.369 C 971.639 624.305 1123.73 624.141 1265.85 649.741 C 1300.12 657.096 1340.68 664.369 1369.45 685.331 C 1404.8 711.09 1403.51 743.354 1404.04 781.819 C 1404.62 824.347 1399.34 856.103 1358.23 877.755 C 1347.78 883.262 1332.15 885.343 1322.65 892.644 C 1310.51 907.59 1306.27 926.738 1292.73 943.778 C 1270.08 972.298 1251.6 970.486 1219.05 974.7 C 1217.1 981.322 1212.69 997.879 1214.58 1003.56 C 1216.17 1008.32 1240.95 1017.58 1247.73 1020.69 C 1286.2 1038.29 1315.52 1080.36 1341.29 1114.36 C 1371.93 1154.79 1414.31 1205.54 1434.44 1251.63 C 1443.72 1272.87 1451.17 1315.98 1454.33 1338.77 C 1457.66 1363.85 1460.4 1389.01 1462.57 1414.22 C 1464.13 1431.07 1463.34 1454.8 1473.19 1468.74 C 1484.07 1484.14 1497.14 1499.02 1509.33 1513.45 L 1567.65 1582.22 C 1612.58 1634.69 1656.21 1689.77 1701.48 1742.35 C 1712.92 1757.39 1731.12 1774.02 1740.07 1789.9 C 1743.64 1796.22 1700.26 1819.39 1692.81 1820.93 C 1683.92 1813.94 1672.99 1800.23 1665.45 1791.36 L 1616.49 1732.69 L 1512.45 1607.97 C 1485.14 1575.6 1457.89 1542.68 1430.36 1510.45 C 1401.47 1476.62 1406.71 1455.11 1402.85 1412.8 C 1398.82 1368.71 1395.08 1317.86 1379.21 1276.34 C 1362.21 1231.89 1325.74 1192.13 1297.18 1154.48 C 1274.12 1124.49 1248.25 1084.71 1211.69 1070.42 C 1180.7 1058.3 1069.6 1018.26 1051.91 1064.03 C 1036.66 1103.47 1122.11 1114.87 1143.98 1124.1 C 1153.19 1127.99 1166.97 1131.05 1176.58 1135.39 C 1237.83 1161.13 1294.73 1227.1 1259.29 1295.28 C 1257.01 1299.67 1273.06 1315 1276.18 1319.54 C 1299.16 1353.01 1303.28 1404.77 1271.62 1434.29 C 1267.37 1438.25 1259.39 1442.78 1254.02 1446.7 C 1254.88 1452.62 1256.74 1459.45 1258.26 1465.21 C 1269.91 1507.08 1244.76 1549.12 1202.45 1558.94 C 1178.02 1564.61 1163.38 1565.88 1140.2 1577.11 C 1138.44 1590.35 1135.87 1606.02 1137.12 1619.09 C 1162.4 1624.03 1188.92 1624.45 1214.54 1626.63 C 1231.61 1628.64 1257.5 1625.38 1270.11 1639.07 C 1274.81 1644.17 1279.79 1652.84 1283.26 1658.37 C 1329.64 1732.2 1385.03 1800.2 1435.13 1871.44 C 1435.72 1872.35 1436.3 1873.95 1436.75 1875.01 C 1435.29 1888.37 1405.96 1906.5 1393.73 1910.45 C 1382.75 1901.7 1362.36 1871.13 1353.32 1858.85 C 1324.7 1820.19 1296.52 1781.21 1268.78 1741.91 C 1257.2 1725.62 1243.22 1703.7 1231.75 1688.87 C 1219.55 1686.65 1198.17 1685.6 1185.07 1684.47 C 1168.96 1683.08 1146.98 1679.94 1131.34 1679.87 C 1129.22 1692.57 1129.1 1705.61 1128.14 1718.5 C 1126.01 1751.18 1123.3 1783.81 1120.01 1816.39 C 1115.03 1867.19 1109.54 1926.98 1048.81 1943.46 C 1030.52 1948.42 1004.27 1943.83 988.372 1933.3 C 941.022 1901.94 944.813 1837.3 939.563 1787.43 C 936.791 1759.33 934.053 1731.24 931.569 1703.12 C 930.375 1689.59 930.385 1671.28 927.298 1658.42 C 917.089 1661.28 903.084 1666.86 892.741 1670.49 C 885.15 1673.16 851.704 1681.6 848.116 1685.3 C 836.054 1697.74 824.923 1716.52 814.343 1730.82 C 771.163 1789.16 729.304 1850.41 682.516 1905.65 C 673.476 1916.32 641.265 1884.89 636.349 1875.8 C 638.994 1870.96 641.936 1866.59 644.995 1862.02 C 667.603 1828.23 693.411 1796.58 717.459 1763.91 C 736.632 1738.17 755.473 1712.18 773.976 1685.95 C 780.251 1676.99 806.973 1634.89 814.339 1631.48 C 833.65 1622.54 862.264 1618.01 883.452 1610.55 C 960.967 1583.24 1037.19 1552.57 1113.06 1521.01 C 1130.11 1513.92 1144.34 1508.3 1162.88 1503.79 C 1171.92 1501.24 1203.04 1500.95 1201.17 1485.61 C 1193.72 1424.4 1100.95 1455.07 1063.95 1457.73 C 1045.15 1459.07 1033.37 1438.3 1035.83 1422.7 C 1040.43 1393.54 1073.75 1393.38 1096.72 1389.12 C 1137.92 1381.37 1177.32 1386.69 1218.49 1389.37 C 1230.59 1390.16 1237.58 1385.61 1234.48 1372.39 C 1223.38 1325.09 1156.93 1315.94 1116.81 1318.8 C 1098 1320.08 1080.06 1324.78 1061.39 1326.45 C 1032.56 1328.64 1022.48 1292.85 1038.42 1274.76 C 1049.99 1261.62 1104.11 1257.19 1121.15 1256.74 C 1133.35 1256.48 1145.54 1257.01 1157.67 1258.35 C 1169.72 1259.68 1202.95 1270.12 1209.74 1261.04 C 1215.72 1253.04 1205.83 1231.38 1199.43 1224.4 C 1177.12 1200.03 1135.5 1175.94 1101.6 1184.41 C 1024.57 1203.64 945.391 1243.06 868.799 1260.72 C 862.26 1258.39 842.915 1248.99 840.922 1243.55 C 836.229 1230.74 852.544 1197.67 856.338 1182.08 C 863.6 1152.24 873.687 1113.95 859.511 1084.83 C 854.784 1075.11 844.699 1071.97 835.599 1069.44 C 830.669 1070.67 822.135 1072.61 818.78 1076.37 C 801.24 1096.03 793.139 1129.29 778.455 1151.36 C 756.706 1182.7 731.137 1212.79 706.856 1242.32 C 676.04 1279.8 664.521 1305.15 655.614 1352.98 C 651.692 1374.18 648.308 1395.48 645.467 1416.85 C 643.246 1433.06 640.154 1460.71 635.197 1475.62 C 629.219 1493.6 600.821 1523.67 588.066 1538.63 L 521.413 1616.69 C 488.286 1656.64 454.824 1696.31 421.032 1735.7 C 402.963 1757.02 384.459 1777.86 366.399 1799.33 C 353.249 1814.96 329.677 1791.37 317.45 1784.09 C 314.565 1782.38 313.108 1780.6 312.64 1777.38 C 320.043 1759.46 364.934 1709.16 380.079 1691.44 L 506.74 1541.87 C 523.005 1523.01 539.139 1504.04 555.139 1484.95 C 565.907 1472.13 578.515 1461.28 581.203 1444.29 C 589.34 1392.85 594.133 1336.76 611.006 1287.28 C 633.515 1221.27 694.844 1170.13 732.036 1112.01 C 749.614 1084.54 756.669 1048.3 782.308 1026.14 C 800.675 1010.78 824.865 1006.79 848.076 1008.81 C 847.31 999.059 844.787 984.015 842.775 974.422 C 832.99 973.357 821.998 973.82 811.593 972.576 C 779.799 968.773 761.018 951.029 747.444 922.995 C 744.192 917.371 738.26 898.492 733.009 894.934 C 718.806 885.31 701.34 883.194 685.904 873.058 C 668.553 861.656 656.5 843.772 652.441 823.411 C 648.418 802.936 648.194 752.8 652.974 732.529 C 655.403 722.169 659.689 712.335 665.622 703.502 C 680.736 681.413 705.258 670.542 730.806 665.569 C 700.424 614.978 692.354 560.534 699.55 502.437 C 706.593 445.571 732.12 391.821 747.887 336.775 C 753.83 316.029 754.836 298.262 760.343 278.08 C 761.737 273.214 766.765 266.56 771.005 263.954 C 815.606 236.541 850.171 314.89 868.315 343.687 C 873.591 352.06 875.601 359.727 881.069 367.378 C 898.634 360.767 941.968 152.212 939.076 126.752 C 936.904 107.636 950.618 88.035 971.889 85.3361 Z M 710.831 807.034 C 718.501 806.133 734.395 798.953 743.197 795.888 C 757.716 790.765 772.531 786.525 787.563 783.191 C 855.911 768.278 955.428 759.599 1025.75 759.901 C 1124.74 760.327 1252.74 767.592 1343.31 808.055 C 1345.49 793.246 1348.5 752.698 1339.37 741.282 C 1319.74 716.735 1244.01 705.841 1214.73 701.907 C 1157.61 694.234 1088.05 687.595 1030.72 688.498 C 1000.37 688.928 969.782 689.625 939.502 691.663 C 894.773 694.674 745.587 707.799 715.901 738.803 C 705.804 749.348 708.763 780.714 709.467 794.899 C 709.67 798.982 710.167 803.003 710.831 807.034 Z M 814.275 911.277 C 833.895 910.129 853.084 903.002 872.746 900.417 C 905.71 896.083 937.713 891.38 971.05 890.466 C 1003.58 889.573 1036.69 886.994 1069.25 889.399 C 1109.3 891.3 1141.9 892.49 1181.74 899.304 C 1201.08 902.612 1225.95 909.402 1243.98 909.728 C 1253.96 898.62 1256.82 886.662 1263.12 873.411 C 1267.78 863.591 1271.98 857.752 1274.57 847.045 C 1189.68 824.886 1106.8 817.697 1019.04 818.882 C 1007.91 819.033 996.845 818.856 985.713 819.5 C 955.091 820.58 801.442 832.661 785.436 848.659 C 783.755 850.34 783.768 852.769 784.084 854.971 C 785.053 861.71 789.234 868.308 791.858 874.521 C 796.845 886.334 801.369 902.229 812.358 909.998 C 812.987 910.438 813.626 910.865 814.275 911.277 Z M 1074.97 1599.99 C 1051.15 1610.72 1005.2 1626.47 986.511 1637.29 C 986.042 1656.91 991.959 1700.61 993.849 1722.5 L 999.808 1796.93 C 1001.59 1819.38 1003.24 1845.1 1008.94 1866.81 C 1017.21 1884.19 1021.5 1887.13 1040.22 1884.74 C 1051.63 1875.91 1056.85 1858.34 1057.35 1845.25 C 1058.29 1820.67 1079.77 1606.12 1076.15 1600.3 L 1074.97 1599.99 Z M 1157.06 956.727 C 1112.44 948.787 1067.8 947.179 1022.59 947.751 C 1015.38 947.843 992.748 947.333 986.564 948.435 C 962.232 950.469 925.602 952.161 902.671 956.438 C 902.408 967.223 904.195 978.621 905.757 989.347 C 908.685 1009.45 910.197 1030.25 914.348 1050.12 C 917.302 1064.26 923.962 1077.66 924.89 1092.35 C 927.816 1113.05 922.894 1160.72 928.352 1176.96 L 929.604 1178.06 C 954.729 1171.45 981.538 1158.05 1006.94 1150.93 C 1012.9 1149.26 1019.79 1147.14 1025.41 1144.63 C 1017.65 1133.31 1007.27 1124.97 1002.04 1113.24 C 981.006 1066.99 994.081 1013.7 1042.69 992.409 C 1072.07 979.546 1102.23 981.718 1133.04 987.17 C 1138.72 988.176 1151.62 991.596 1153.13 984.598 C 1155 975.937 1157.04 965.569 1157.06 956.727 Z";

const LogoIcon = ({ size = 48, color = C.blue }) => (
  <svg width={size} height={size} viewBox="280 50 1500 1920" fill="none">
    <path fill={color} d={ICON_PATH} />
  </svg>
);

/* ═══════════════════════════════════════════
   SCROLL REVEAL HOOK
   ═══════════════════════════════════════════ */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ═══════════════════════════════════════════
   REUSABLE: SECTION WRAPPER
   ═══════════════════════════════════════════ */
const Section = ({ children, bg = "transparent", id, style = {} }) => (
  <section
    id={id}
    style={{
      background: bg,
      padding: "96px 24px",
      ...style,
    }}
  >
    <div style={{ maxWidth: 1080, margin: "0 auto" }}>{children}</div>
  </section>
);

/* ═══════════════════════════════════════════
   NAV
   ═══════════════════════════════════════════ */
const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Acción", href: "#accion" },
  { label: "Sumate", href: "#sumate" },
  { label: "Noticias", href: "#noticias" },
  { label: "Contacto", href: "#contacto" },
];

const Nav = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(252,252,252,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(126,150,190,0.15)` : "1px solid transparent",
        transition: "all 0.4s ease",
        padding: scrolled ? "12px 32px" : "20px 32px",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <LogoIcon size={scrolled ? 32 : 40} color={C.blue} />
          <span
            style={{
              fontFamily: "'BIZ UDPGothic', sans-serif",
              fontWeight: 700,
              fontSize: scrolled ? 15 : 17,
              color: C.dark,
              letterSpacing: "-0.3px",
              lineHeight: 1.15,
              transition: "all 0.3s",
            }}
          >
            <span style={{ color: C.blue }}>unidos</span>por
            <br />
            el<span style={{ color: C.blue }}>deporte</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: C.dark,
                textDecoration: "none",
                letterSpacing: "0.3px",
                transition: "color 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.blue)}
              onMouseLeave={(e) => (e.target.style.color = C.dark)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#sumate"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: C.white,
              background: C.blue,
              padding: "8px 20px",
              borderRadius: 24,
              textDecoration: "none",
              letterSpacing: "0.2px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = C.light)}
            onMouseLeave={(e) => (e.target.style.background = C.blue)}
          >
            Sumate
          </a>
        </div>
      </div>
    </nav>
  );
};

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeUp = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(165deg, ${C.white} 0%, ${C.heroBg} 50%, ${C.bg} 100%)`,
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
    >
      {/* Decorative icon — large, faded, behind content */}
      <div
        style={{
          position: "absolute",
          right: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: loaded ? 0.04 : 0,
          transition: "opacity 1.6s ease 0.3s",
          pointerEvents: "none",
        }}
      >
        <LogoIcon size={700} color={C.dark} />
      </div>

      {/* Subtle dot pattern overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(${C.blue}15 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 820, textAlign: "center" }}>
        {/* Badge */}
        <div style={fadeUp(0.1)}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: C.blue,
              background: `${C.blue}14`,
              padding: "6px 16px",
              borderRadius: 20,
              display: "inline-block",
            }}
          >
            Fundación · Corrientes, Argentina
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(40px, 7vw, 76px)",
            fontWeight: 800,
            color: C.dark,
            lineHeight: 1.05,
            margin: "28px 0 0",
            letterSpacing: "-2px",
            ...fadeUp(0.25),
          }}
        >
          El deporte
          <br />
          <span style={{ color: C.blue }}>nos une</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(16px, 2.2vw, 20px)",
            color: C.slate,
            lineHeight: 1.65,
            maxWidth: 560,
            margin: "24px auto 0",
            ...fadeUp(0.4),
          }}
        >
          Somos la fundación que conecta, fortalece y transforma el ecosistema
          deportivo correntino. Trabajamos para que el deporte llegue a todos.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            marginTop: 40,
            flexWrap: "wrap",
            ...fadeUp(0.55),
          }}
        >
          <a
            href="#accion"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: C.white,
              background: C.blue,
              padding: "14px 32px",
              borderRadius: 32,
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: `0 4px 20px ${C.blue}40`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = `0 8px 28px ${C.blue}50`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = `0 4px 20px ${C.blue}40`;
            }}
          >
            Conocé lo que hacemos
          </a>
          <a
            href="#sumate"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: C.dark,
              background: "transparent",
              padding: "14px 32px",
              borderRadius: 32,
              border: `2px solid ${C.dark}22`,
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = C.blue;
              e.target.style.color = C.blue;
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = `${C.dark}22`;
              e.target.style.color = C.dark;
            }}
          >
            Sumate
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: 64,
            opacity: loaded ? 0.4 : 0,
            transition: "opacity 1s ease 1s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ fontFamily: "'DM Sans'", fontSize: 11, color: C.slate, letterSpacing: "1px" }}>
            SCROLL
          </span>
          <div
            style={{
              width: 1,
              height: 32,
              background: `linear-gradient(to bottom, ${C.slate}, transparent)`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   QUÉ HACEMOS (5 pillars)
   ═══════════════════════════════════════════ */
const pillars = [
  {
    icon: Handshake,
    title: "Articulación institucional",
    text: "Coordinamos acciones entre clubes, federaciones, gobierno y educación. Sumamos para que cada uno llegue más lejos.",
  },
  {
    icon: Building2,
    title: "Infraestructura y rendimiento",
    text: "Promovemos el diseño y optimización de espacios deportivos, incluyendo un Centro de Alto Rendimiento para todas las disciplinas.",
  },
  {
    icon: HeartPulse,
    title: "Inclusión y acceso",
    text: "Trabajamos por la incorporación de mujeres, personas con capacidades diferentes, adultos mayores y jóvenes en el deporte.",
  },
  {
    icon: Wallet,
    title: "Gestión de recursos",
    text: "Gestionamos fondos públicos y privados para canchas, equipamiento, formación y competencias donde más se necesitan.",
  },
  {
    icon: Scale,
    title: "Política deportiva",
    text: "Elaboramos proyectos de ley y propuestas de reforma para construir una política deportiva provincial sólida y de largo plazo.",
  },
];

const PillarCard = ({ pillar, index }) => {
  const [ref, vis] = useReveal(0.1);
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 180px",
        minWidth: 180,
        background: hovered ? C.white : "transparent",
        borderRadius: 16,
        padding: "32px 24px",
        transition: "all 0.4s ease, opacity 0.7s ease, transform 0.7s ease",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 0.08}s`,
        boxShadow: hovered ? `0 8px 32px ${C.blue}18` : "none",
        cursor: "default",
        border: `1px solid ${hovered ? C.blue + "25" : "transparent"}`,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: `${C.blue}12`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
          transition: "background 0.3s",
          ...(hovered ? { background: `${C.blue}20` } : {}),
        }}
      >
        <pillar.icon size={24} color={C.blue} strokeWidth={1.8} />
      </div>
      <h3
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: 16,
          fontWeight: 700,
          color: C.dark,
          marginBottom: 10,
          lineHeight: 1.3,
        }}
      >
        {pillar.title}
      </h3>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          color: C.slate,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {pillar.text}
      </p>
    </div>
  );
};

const QueHacemos = () => {
  const [hRef, hVis] = useReveal();
  return (
    <Section bg={C.bg} id="accion">
      <div
        ref={hRef}
        style={{
          textAlign: "center",
          marginBottom: 56,
          opacity: hVis ? 1 : 0,
          transform: hVis ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans'",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: C.blue,
          }}
        >
          Qué hacemos
        </span>
        <h2
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(28px, 4.5vw, 42px)",
            fontWeight: 800,
            color: C.dark,
            margin: "12px 0 0",
            letterSpacing: "-1px",
          }}
        >
          Conectamos lo disperso,
          <br />
          fortalecemos lo que existe
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
          justifyContent: "center",
        }}
      >
        {pillars.map((p, i) => (
          <PillarCard key={i} pillar={p} index={i} />
        ))}
      </div>
    </Section>
  );
};

/* ═══════════════════════════════════════════
   IMPACT / NUMBERS
   ═══════════════════════════════════════════ */
const stats = [
  { number: "200+", label: "Clubes deportivos en Corrientes" },
  { number: "99", label: "Años de duración institucional" },
  { number: "5", label: "Ejes de acción simultáneos" },
  { number: "1", label: "Objetivo: que el deporte llegue a todos" },
];

const ImpactSection = () => {
  const [ref, vis] = useReveal(0.2);
  return (
    <Section bg={C.white} id="nosotros">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        {/* Left: story */}
        <div
          ref={ref}
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.8s ease",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans'",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: C.blue,
            }}
          >
            Nuestra historia
          </span>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(26px, 3.5vw, 38px)",
              fontWeight: 800,
              color: C.dark,
              margin: "12px 0 20px",
              letterSpacing: "-0.8px",
              lineHeight: 1.15,
            }}
          >
            Una fundación nacida del deporte correntino
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: C.slate,
              lineHeight: 1.7,
              margin: "0 0 16px",
            }}
          >
            En noviembre de 2024, en Corrientes, nació una idea que llevaba años
            gestándose: crear un espacio donde el deporte dejara de ser una actividad
            aislada y se convirtiera en el motor de una comunidad entera.
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: C.slate,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            La Fundación Unidos por el Deporte fue constituida por Juan José López
            Desimoni con un propósito claro: articular, conectar y fortalecer el
            ecosistema deportivo de la provincia. No como una institución más, sino
            como el puente entre quienes hacen deporte, quienes lo organizan y
            quienes pueden potenciarlo.
          </p>
        </div>

        {/* Right: stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
          }}
        >
          {stats.map((s, i) => {
            const [sRef, sVis] = useReveal(0.1);
            return (
              <div
                key={i}
                ref={sRef}
                style={{
                  background: C.bg,
                  borderRadius: 16,
                  padding: "28px 24px",
                  opacity: sVis ? 1 : 0,
                  transform: sVis ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease ${i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: 36,
                    fontWeight: 800,
                    color: C.blue,
                    lineHeight: 1,
                    letterSpacing: "-1px",
                  }}
                >
                  {s.number}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    color: C.slate,
                    marginTop: 8,
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

/* ═══════════════════════════════════════════
   QUOTE BANNER
   ═══════════════════════════════════════════ */
const QuoteBanner = () => {
  const [ref, vis] = useReveal(0.3);
  return (
    <section
      style={{
        background: C.dark,
        padding: "72px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative accent */}
      <div
        style={{
          position: "absolute",
          top: -60,
          left: "10%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: C.blue,
          opacity: 0.08,
          filter: "blur(60px)",
        }}
      />
      <div
        ref={ref}
        style={{
          maxWidth: 740,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          opacity: vis ? 1 : 0,
          transform: vis ? "scale(1)" : "scale(0.96)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ fontSize: 40, color: C.blue, marginBottom: 16, lineHeight: 1 }}>"</div>
        <p
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(18px, 3vw, 26px)",
            fontWeight: 600,
            color: C.white,
            lineHeight: 1.5,
            letterSpacing: "-0.3px",
            margin: 0,
          }}
        >
          No creemos en el deporte como espectáculo lejano. Creemos en el deporte
          como herramienta de encuentro, de salud y de transformación social.
        </p>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════
   SUMATE (3 audience paths)
   ═══════════════════════════════════════════ */
const audiences = [
  {
    icon: Trophy,
    title: "Clubes y federaciones",
    text: "Articulamos acciones, gestionamos recursos y les damos visibilidad. Somos un aliado que entiende sus desafíos y los potencia sin quitar autonomía.",
    cta: "Trabajemos juntos",
  },
  {
    icon: Users,
    title: "Deportistas y familias",
    text: "Oportunidades, información y contención. Trabajamos para que el deporte funcione mejor: más accesible, más organizado y con proyección para todos.",
    cta: "Conocé más",
  },
  {
    icon: HeartHandshake,
    title: "Sponsors y donantes",
    text: "Proyectos con impacto medible, transparencia total y alineación con valores positivos. Acompañarnos es invertir en infraestructura y oportunidades reales.",
    cta: "Contactanos",
  },
];

const SumateSection = () => {
  const [hRef, hVis] = useReveal();
  return (
    <Section bg={C.white} id="sumate">
      <div
        ref={hRef}
        style={{
          textAlign: "center",
          marginBottom: 56,
          opacity: hVis ? 1 : 0,
          transform: hVis ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans'",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: C.blue,
          }}
        >
          Sumate
        </span>
        <h2
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(28px, 4.5vw, 42px)",
            fontWeight: 800,
            color: C.dark,
            margin: "12px 0 0",
            letterSpacing: "-1px",
          }}
        >
          Hay un lugar para vos
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {audiences.map((a, i) => {
          const [ref, vis] = useReveal(0.1);
          const [hov, setHov] = useState(false);
          return (
            <div
              key={i}
              ref={ref}
              onMouseEnter={() => setHov(true)}
              onMouseLeave={() => setHov(false)}
              style={{
                background: C.bg,
                borderRadius: 20,
                padding: "40px 32px",
                opacity: vis ? 1 : 0,
                transform: vis
                  ? hov
                    ? "translateY(-4px)"
                    : "translateY(0)"
                  : "translateY(24px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
                border: `1px solid ${hov ? C.blue + "30" : "transparent"}`,
                boxShadow: hov ? `0 12px 40px ${C.blue}12` : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `${C.blue}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  transition: "background 0.3s",
                  ...(hov ? { background: `${C.blue}20` } : {}),
                }}
              >
                <a.icon size={28} color={C.blue} strokeWidth={1.7} />
              </div>
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: C.dark,
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                {a.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: C.slate,
                  lineHeight: 1.65,
                  margin: "0 0 24px",
                  flex: 1,
                }}
              >
                {a.text}
              </p>
              <a
                href="#contacto"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: C.blue,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = "10px")}
                onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
              >
                {a.cta} <ArrowRight size={15} strokeWidth={2.2} />
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

/* ═══════════════════════════════════════════
   NOTICIAS (placeholder)
   ═══════════════════════════════════════════ */
const NoticiasSection = () => {
  const [ref, vis] = useReveal();
  const placeholders = [
    {
      date: "Marzo 2026",
      title: "La fundación lanza su sitio web institucional",
      text: "Un paso clave en la construcción de nuestra presencia digital y la conexión con toda la comunidad deportiva.",
    },
    {
      date: "Mayo 2025",
      title: "Aprobación oficial por la IGPJ de Corrientes",
      text: "Resolución Nº 000552/2025: la fundación queda formalmente constituida como persona jurídica.",
    },
    {
      date: "Noviembre 2024",
      title: "Acta constitutiva firmada en Corrientes",
      text: "Juan José López Desimoni funda oficialmente Unidos por el Deporte con la visión de transformar el deporte correntino.",
    },
  ];

  return (
    <Section bg={C.bg} id="noticias">
      <div
        ref={ref}
        style={{
          textAlign: "center",
          marginBottom: 56,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans'",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: C.blue,
          }}
        >
          Noticias
        </span>
        <h2
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(28px, 4.5vw, 42px)",
            fontWeight: 800,
            color: C.dark,
            margin: "12px 0 0",
            letterSpacing: "-1px",
          }}
        >
          Lo último de la fundación
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {placeholders.map((n, i) => {
          const [nRef, nVis] = useReveal(0.1);
          return (
            <div
              key={i}
              ref={nRef}
              style={{
                background: C.white,
                borderRadius: 16,
                padding: "32px 28px",
                opacity: nVis ? 1 : 0,
                transform: nVis ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
                border: `1px solid ${C.blue}10`,
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 12,
                  fontWeight: 600,
                  color: C.blue,
                  letterSpacing: "0.5px",
                }}
              >
                {n.date}
              </span>
              <h3
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: C.dark,
                  margin: "10px 0 10px",
                  lineHeight: 1.35,
                }}
              >
                {n.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: C.slate,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {n.text}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

/* ═══════════════════════════════════════════
   CONTACTO
   ═══════════════════════════════════════════ */
const ContactoSection = () => {
  const [ref, vis] = useReveal();
  return (
    <Section bg={C.white} id="contacto">
      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease",
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "'DM Sans'",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: C.blue,
            }}
          >
            Contacto
          </span>
          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "clamp(28px, 4vw, 38px)",
              fontWeight: 800,
              color: C.dark,
              margin: "12px 0 20px",
              letterSpacing: "-0.8px",
              lineHeight: 1.15,
            }}
          >
            Hablemos
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: C.slate,
              lineHeight: 1.65,
              margin: "0 0 32px",
            }}
          >
            Si sos un club, deportista, sponsor o simplemente alguien que quiere
            sumarse a transformar el deporte en Corrientes, escribinos.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: MapPin, text: "La Cruz 3149, Corrientes Capital" },
              { icon: Mail, text: "contacto@unidosporeldeporte.org.ar" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  color: C.dark,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: `${C.blue}12`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <item.icon size={17} color={C.blue} strokeWidth={1.8} />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Simple form placeholder */}
        <div
          style={{
            background: C.bg,
            borderRadius: 20,
            padding: "36px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {["Nombre", "Email", "Mensaje"].map((label) => (
            <div key={label}>
              <label
                style={{
                  fontFamily: "'DM Sans'",
                  fontSize: 12,
                  fontWeight: 600,
                  color: C.slate,
                  letterSpacing: "0.5px",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                {label}
              </label>
              {label === "Mensaje" ? (
                <textarea
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: `1px solid ${C.blue}25`,
                    background: C.white,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: C.dark,
                    outline: "none",
                    resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              ) : (
                <input
                  type={label === "Email" ? "email" : "text"}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 12,
                    border: `1px solid ${C.blue}25`,
                    background: C.white,
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: C.dark,
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              )}
            </div>
          ))}
          <button
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: C.white,
              background: C.blue,
              border: "none",
              padding: "14px 28px",
              borderRadius: 28,
              cursor: "pointer",
              marginTop: 8,
              transition: "background 0.2s",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) => (e.target.style.background = C.light)}
            onMouseLeave={(e) => (e.target.style.background = C.blue)}
          >
            Enviar mensaje
          </button>
        </div>
      </div>
    </Section>
  );
};

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
const Footer = () => (
  <footer
    style={{
      background: C.dark,
      padding: "48px 24px 32px",
    }}
  >
    <div
      style={{
        maxWidth: 1080,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 32,
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <LogoIcon size={32} color={C.light} />
          <span
            style={{
              fontFamily: "'BIZ UDPGothic', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: C.white,
              lineHeight: 1.15,
            }}
          >
            <span style={{ color: C.light }}>unidos</span>por
            <br />
            el<span style={{ color: C.light }}>deporte</span>
          </span>
        </div>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 13,
            color: C.slate,
            lineHeight: 1.5,
            maxWidth: 300,
            margin: 0,
          }}
        >
          Fundación sin fines de lucro · Corrientes, Argentina
          <br />
          Res. Nº 000552/2025 — IGPJ Corrientes
        </p>
      </div>

      <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
        <div>
          <div
            style={{
              fontFamily: "'DM Sans'",
              fontSize: 11,
              fontWeight: 600,
              color: C.blue,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Navegación
          </div>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "block",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "#9a9da6",
                textDecoration: "none",
                marginBottom: 8,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = C.white)}
              onMouseLeave={(e) => (e.target.style.color = "#9a9da6")}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <div
            style={{
              fontFamily: "'DM Sans'",
              fontSize: 11,
              fontWeight: 600,
              color: C.blue,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Legal
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "#9a9da6",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            La Cruz 3149, Corrientes Capital
            <br />
            Tomo 170, Folio 14/23, Legajo 2061
            <br />
            Expediente Nº 221-13-11-4403/2024
          </p>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div
      style={{
        maxWidth: 1080,
        margin: "32px auto 0",
        borderTop: `1px solid ${C.slate}30`,
        paddingTop: 20,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12,
          color: "#6b6e76",
        }}
      >
        © 2026 Fundación Unidos por el Deporte
      </span>
      <span
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: 12,
          fontWeight: 600,
          color: C.blue,
          letterSpacing: "0.5px",
        }}
      >
        El deporte nos une.
      </span>
    </div>
  </footer>
);

/* ═══════════════════════════════════════════
   GLOBAL STYLES (injected via <style>)
   ═══════════════════════════════════════════ */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@700&family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
    body { background: ${C.white}; }
    ::selection { background: ${C.blue}30; color: ${C.dark}; }
    input:focus, textarea:focus { border-color: ${C.blue} !important; box-shadow: 0 0 0 3px ${C.blue}15; }

    @media (max-width: 768px) {
      section { padding: 64px 20px !important; }
    }
  `}</style>
);

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
export default function UPEDHomepage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: C.dark }}>
      <GlobalStyles />
      <Nav scrolled={scrolled} />
      <Hero />
      <ImpactSection />
      <QuoteBanner />
      <QueHacemos />
      <SumateSection />
      <NoticiasSection />
      <ContactoSection />
      <Footer />
    </div>
  );
}
