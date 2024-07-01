import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import "./LineDraw.css";

const LineDraw = () => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="line-container">
      <svg
        viewBox="0 0 2220 5595"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        <motion.path
          d="M1226.46 4.70099C1226.75 2.79064 1225.44 1.00281 1223.53 0.707761C1221.62 0.412709 1219.84 1.72216 1219.54 3.63251L1226.46 4.70099ZM1564.5 4670L1564.23 4673.49L1564.24 4673.49L1564.26 4673.49L1564.5 4670ZM1533.59 5230.5L1530.09 5230.42L1530.08 5230.76L1530.14 5231.1L1533.59 5230.5ZM1106.59 4866.5L1104.83 4863.47L1106.59 4866.5ZM496 4293.5L499.325 4294.59L496 4293.5ZM2190.5 4724L2193.74 4725.33L2190.5 4724ZM627.586 5070.5L631.061 5070.09L631.034 5069.86L630.978 5069.64L627.586 5070.5ZM761.586 5445.5L763.087 5442.34L761.586 5445.5ZM1281.5 5572.5L1245.33 5554.47L1247.8 5594.8L1281.5 5572.5ZM1219.54 3.63251C1185.86 221.735 1189.19 485.778 1209.33 772.701C1229.47 1059.64 1266.43 1369.72 1300.08 1679.86C1367.42 2300.44 1421.41 2921.01 1301.62 3359.24L1308.38 3361.09C1428.59 2921.32 1374.33 2299.31 1307.04 1679.1C1273.38 1368.85 1236.44 1058.98 1216.31 772.211C1196.18 485.43 1192.89 222.015 1226.46 4.70099L1219.54 3.63251ZM1301.62 3359.24C1181.5 3798.7 1194.61 4122.87 1263.92 4339.4C1333.13 4555.66 1458.79 4665.33 1564.23 4673.49L1564.77 4666.51C1463.54 4658.67 1339.45 4552.42 1270.58 4337.27C1201.8 4122.38 1188.5 3799.64 1308.38 3361.09L1301.62 3359.24ZM1564.26 4673.49C1719.11 4684.32 1921.5 4723.9 2041.86 4803.54C2101.98 4843.33 2141.03 4892.69 2144.25 4952.94C2147.48 5013.3 2114.83 5085.81 2028.61 5172.03L2033.56 5176.98C2120.34 5090.19 2154.62 5015.85 2151.24 4952.56C2147.85 4889.17 2106.75 4838.09 2045.72 4797.71C1923.79 4717.02 1719.89 4677.35 1564.74 4666.51L1564.26 4673.49ZM2028.61 5172.03C1855.7 5344.93 1737.89 5389.11 1661.31 5375.86C1585.08 5362.68 1547.77 5292.09 1537.03 5229.9L1530.14 5231.1C1541.07 5294.41 1579.51 5368.82 1660.11 5382.76C1740.37 5396.64 1860.47 5350.07 2033.56 5176.98L2028.61 5172.03ZM1537.08 5230.58C1539.59 5127.02 1521.25 4983.89 1457.43 4892.2C1425.43 4846.22 1381.86 4813 1323.69 4804.45C1265.63 4795.91 1193.62 4812.05 1104.83 4863.47L1108.34 4869.53C1196.35 4818.55 1266.74 4803.15 1322.67 4811.38C1378.5 4819.58 1420.52 4851.42 1451.69 4896.2C1514.22 4986.04 1532.58 5127.32 1530.09 5230.42L1537.08 5230.58ZM1104.83 4863.47C995.008 4927.08 897.828 4937.44 815.001 4914.04C732.083 4890.61 663.061 4833.21 609.935 4760.43C556.813 4687.65 519.737 4599.69 500.672 4515.56C481.591 4431.36 480.641 4351.42 499.325 4294.59L492.675 4292.41C473.445 4350.9 474.613 4432.25 493.845 4517.11C513.094 4602.05 550.528 4690.91 604.281 4764.56C658.029 4838.19 728.246 4896.8 813.098 4920.77C898.041 4944.77 997.163 4933.92 1108.34 4869.53L1104.83 4863.47ZM499.325 4294.59C545.825 4153.15 689.844 4069.37 877.337 4033.6C1064.68 3997.85 1294.38 4010.29 1510.26 4060.36C1726.17 4110.43 1927.81 4198.05 2059.23 4312.28C2124.91 4369.38 2172.9 4433 2196.49 4501.76C2220.04 4570.45 2219.33 4644.47 2187.26 4722.67L2193.74 4725.33C2226.44 4645.6 2227.23 4569.82 2203.11 4499.49C2179.01 4429.24 2130.13 4364.64 2063.82 4307C1931.24 4191.75 1728.39 4103.76 1511.84 4053.54C1295.27 4003.31 1064.55 3990.75 876.025 4026.72C687.658 4062.66 540.379 4147.3 492.675 4292.41L499.325 4294.59ZM2187.26 4722.67C2099.3 4937.17 1915.92 5013.72 1710.42 5061.4C1659.06 5073.32 1606.38 5083.41 1553.5 5093.42C1500.64 5103.42 1447.57 5113.34 1395.55 5124.86C1291.53 5147.92 1191.4 5177.5 1104.84 5227.47L1108.34 5233.53C1193.97 5184.1 1293.27 5154.7 1397.07 5131.7C1448.96 5120.2 1501.9 5110.31 1554.8 5100.3C1607.67 5090.29 1660.48 5080.17 1712 5068.22C1918.04 5020.42 2104.42 4943.12 2193.74 4725.33L2187.26 4722.67ZM1104.84 5227.47C933.226 5326.53 819.02 5320.01 745.886 5273.17C672.44 5226.13 639.081 5137.63 631.061 5070.09L624.11 5070.91C632.257 5139.53 666.198 5230.44 742.11 5279.06C818.334 5327.88 935.545 5333.27 1108.34 5233.53L1104.84 5227.47ZM630.978 5069.64C606.508 4973.26 554.178 4843.74 476.443 4769.35C437.497 4732.08 391.897 4708.39 340.059 4710.05C288.255 4711.71 230.981 4738.66 168.611 4801.03L173.56 4805.98C235.19 4744.35 290.874 4718.63 340.283 4717.05C389.66 4715.46 433.529 4737.97 471.603 4774.4C547.91 4847.43 599.83 4975.41 624.193 5071.36L630.978 5069.64ZM168.611 4801.03C13.1169 4956.52 -18.394 5091.41 9.72506 5187.98C37.7889 5284.36 125.043 5341.5 204.586 5341.5V5334.5C128.128 5334.5 43.6321 5279.39 16.446 5186.02C-10.685 5092.84 19.0541 4960.48 173.56 4805.98L168.611 4801.03ZM204.586 5341.5C283.114 5341.5 347.427 5333.13 429.821 5342.35C511.961 5351.55 611.832 5378.28 760.084 5448.66L763.087 5442.34C614.339 5371.72 513.71 5344.7 430.6 5335.4C347.744 5326.12 282.057 5334.5 204.586 5334.5V5341.5ZM760.084 5448.66C981.554 5553.8 1109.06 5584 1250.19 5577.92L1249.89 5570.93C1110.35 5576.94 984.031 5547.23 763.087 5442.34L760.084 5448.66Z"
          fill="url(#paint0_linear_409_97)"
          stroke="black"
          strokeWidth="2"
          variants={pathVariants}
        />
        <defs>
          <linearGradient
            id="paint0_linear_409_97"
            x1="1034.27"
            y1="954.826"
            x2="1034.27"
            y2="6879.56"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6BD88A" />
            <stop offset="1" stopColor="#00FF48" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LineDraw;
