// src/data/productsData.js
export const categories = [
  { id: "fruits", name: "Fresh Fruits", icon: "🍎", count: 35, color: "#FF6B6B", image: "https://imgs.search.brave.com/0N7JsJXOmSC79nTBsAP1cnpEO3OdECEdr7rwtu-7q2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kaWZmZXJlbnQt/dHlwZXMtZnJ1aXRz/XzE0NzM3Ni02MTcu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw" },
  { id: "vegetables", name: "Vegetables", icon: "🥬", count: 40, color: "#4CAF50", image: "https://imgs.search.brave.com/E83pDbxpOoioYUyejlJvjsW7DzPHPpATbSH_66ESM5M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDkx/ODM3OTI4L3Bob3Rv/L3ZlZ2V0YWJsZXMt/YW5kLWZydWl0cy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VHl0S25VVzlzdXRa/RFhXOEVaUEg0VzM3/QlFWVWdjbzh4Q3JF/SzFxYlNIVT0" },
  { id: "dairy", name: "Dairy & Eggs", icon: "🥛", count: 25, color: "#FFD166", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=700&auto=format&fit=crop&q=80" },
  { id: "bakery", name: "Bakery", icon: "🥐", count: 20, color: "#06D6A0", image: "https://imgs.search.brave.com/9XQ4J6If407TlVQiXmqkqKHjp8Wjb4WrL2hTq05CzhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjk2/Mjg5NjU2L3Bob3Rv/L3dob2xlLXdoZWF0/LWJyZWFkLW9uLXdv/b2Rlbi1wbGF0ZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cGo1eWV3SkN5V0Jh/Y0xZWngxSVpEOF93/N2pNQTU2RnNZU3Jr/dnVTMlVDOD0" },
  { id: "beverages", name: "Beverages", icon: "🥤", count: 30, color: "#118AB2", image: "https://imgs.search.brave.com/Uwg4V7gN7DPUpoE03ou1YPbxSBpkSeoJg-8nq5IL1xk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzEv/OTc4LzMyNi9zbWFs/bC9yZWZyZXNoaW5n/LWNvbGQtY29sb3Jm/dWwtc29mdC1kcmlu/a3Mtd2l0aC1pY2Ut/YW5kLWNpdHJ1cy1w/aG90by5qcGc" },
  { id: "snacks", name: "Snacks & Chips", icon: "🍿", count: 35, color: "#EF476F", image: "https://imgs.search.brave.com/3NSNEBfI-YWFN2vvb-H15rCdKFanoYp2U4MKeODRisk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYWJvdXRhbWF6/b24uY29tL2RpbXM0/L2RlZmF1bHQvODYw/MzRhZS8yMTQ3NDgz/NjQ3L3N0cmlwL3Ry/dWUvY3JvcC8xMjgw/eDcyMCswKzAvcmVz/aXplLzEyODB4NzIw/IS9xdWFsaXR5Lzkw/Lz91cmw9aHR0cHM6/Ly9hbWF6b24tYmxv/Z3MtYnJpZ2h0c3Bv/dC5zMy5hbWF6b25h/d3MuY29tLzA1LzA5/L2NhZjQ0OWMwNDkw/Yzg2ZGFhZGZhMjFh/MzBkNDEvbXVzdC10/cnktaGVhbHRoeS1z/bmFja3MuanBn" },
  { id: "meat", name: "Meat & Poultry", icon: "🍗", count: 15, color: "#FF9A76", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=700&auto=format&fit=crop&q=80" },
  { id: "seafood", name: "Fish & Seafood", icon: "🐟", count: 12, color: "#00BCD4", image: "https://images.fsh.com/photo-1599159340657-84d6dd7594f2?w=700&auto=format&fit=crop&q=80" },
  { id: "frozen", name: "Frozen Foods", icon: "❄️", count: 18, color: "#A7C5EB", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=700&auto=format&fit=crop&q=80" },
  { id: "spices", name: "Spices & Masala", icon: "🌶️", count: 22, color: "#FF9800", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=700&auto=format&fit=crop&q=80" },
  { id: "cooking", name: "Cooking Essentials", icon: "🍯", count: 25, color: "#8D6E63", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&auto=format&fit=crop&q=80" },
  { id: "breakfast", name: "Breakfast Cereals", icon: "🥣", count: 15, color: "#FFB74D", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=700&auto=format&fit=crop&q=80" },
  { id: "personal-care", name: "Personal Care", icon: "🧴", count: 20, color: "#9C27B0", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&auto=format&fit=crop&q=80" },
  { id: "cleaning", name: "Cleaning Supplies", icon: "🧽", count: 18, color: "#2196F3", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=700&auto=format&fit=crop&q=80" },
  { id: "pet-care", name: "Pet Care", icon: "🐾", count: 10, color: "#795548", image: "https://images.unsplash.com/photo-1596273315327-5f0599334c5f?w=700&auto=format&fit=crop&q=80" },
  { id: "baby-care", name: "Baby Care", icon: "👶", count: 12, color: "#F48FB1", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=700&auto=format&fit=crop&q=80" },
  { id: "organic", name: "Organic Products", icon: "🌿", count: 15, color: "#66BB6A", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=700&auto=format&fit=crop&q=80" },
];

// Helper function to generate properly scaled weight options with realistic Indian prices
const generateWeightOptions = (basePrice, unitType, productName = '') => {
  if (productName.includes("Eggs") || unitType === "dozen") {
    return [
      { value: "6 eggs", price: Math.round(basePrice * 0.5) },
      { value: "12 eggs", price: basePrice }
    ];
  } else if (productName.includes("Milk") || unitType === "litre") {
    return [
      { value: "500ml", price: Math.round(basePrice * 0.5) },
      { value: "1L", price: basePrice },
      { value: "2L", price: Math.round(basePrice * 2) }
    ];
  } else if (unitType === "kg") {
    return [
      { value: "500g", price: Math.round(basePrice * 0.5) },
      { value: "1kg", price: basePrice },
      { value: "2kg", price: Math.round(basePrice * 2) }
    ];
  } else if (unitType === "bottle") {
    return [
      { value: "250ml", price: Math.round(basePrice * 0.25) },
      { value: "500ml", price: Math.round(basePrice * 0.5) },
      { value: "1L", price: basePrice }
    ];
  } else if (unitType === "pack") {
    return [
      { value: "Small Pack", price: Math.round(basePrice * 0.5) },
      { value: "Regular Pack", price: basePrice },
      { value: "Family Pack", price: Math.round(basePrice * 2) }
    ];
  } else {
    // Default for other units
    return [
      { value: "500g", price: Math.round(basePrice * 0.5) },
      { value: "1kg", price: basePrice }
    ];
  }
};

// Generate 250+ products with realistic Indian prices
const generateProducts = () => {
  const products = [];
  let id = 1;
  
  // Helper function to generate random data
  const randomPrice = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const randomRating = () => (Math.random() * 1.5 + 3.5).toFixed(1);
  const randomReviews = () => Math.floor(Math.random() * 400) + 50;
  const randomDiscount = () => Math.random() > 0.7 ? Math.floor(Math.random() * 40) + 5 : 0;
  
  // Fruits (35 products) - Realistic Indian prices
  const fruits = [
    { name: "Fresh Apples", image: "https://imgs.search.brave.com/S8zTARAt2tkKdb1iC5YEQssQsJaaSh3i2rvTvuhtlcc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcy/MzY0Mjg0L3Bob3Rv/L2FwcGxlcy13YWxs/cGFwZXIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTMxb1g0/V2xRdkN1Tk94UEht/azdVeWMtOFhYbE9p/QlBDLUJhTk12THdu/clk9", min: 80, max: 180, unit: "kg" },
    { name: "Banana Bunch", image: "https://imgs.search.brave.com/CA4T59dFRDVtS98iyqx8Ke9xv3B_M8IUXaddZlfwUjE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M5Lzdm/LzI4L2M5N2YyODVl/OTNhY2I5MmUwNDJh/ZTlhYWRmOTMwYzVm/LmpwZw", min: 30, max: 70, unit: "dozen" },
    { name: "Sweet Oranges", image: "https://imgs.search.brave.com/pNecFnTyevwfCUNkYvBaMON_githPgZqa_W2ObEExqk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGl2ZWVhdGxlYXJu/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMS9NYW5k/YXJpbi1PcmFuZ2Uu/anBn", min: 40, max: 100, unit: "kg" },
    { name: "Juicy Grapes", image: "https://imgs.search.brave.com/lQAf8S6LpccjV9P0CqF2zI-ABvdGnvSjnecMDKsm-nY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZHJlcHVibGlj/LmNvbS9pbWcvZ2Fs/bGVyeS8xNS10eXBl/cy1vZi1ncmFwZXMt/dG8ta25vdy1lYXQt/YW5kLWRyaW5rL3Ro/b21jb3JkLTE3NDMx/ODgxOTAuanBn", min: 60, max: 150, unit: "kg" },
    { name: "Ripe Mangoes", image: "https://imgs.search.brave.com/bFOQRDlkKRdYClmogKQer3dmghV8KhWCLydgxZIZ-LQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/NDg5MDk2OS9waG90/by9hbHBob25zby1t/YW5nb2VzLWNsdXN0/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUpHczVZYTZo/REE5Q0ZTVGp4TjZV/UHNEbWpiQS1RY0N3/LU0xN2pDNWExNUk9", min: 50, max: 250, unit: "kg" },
    { name: "Fresh Strawberries", image: "https://imgs.search.brave.com/jXq2Dub4SvuElhUbZDir1Wtg9T6Sy5YIiezvrS5XnaU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkzLzIw/LzVkLzkzMjA1ZGEw/Y2VkODkyODdlNDBh/MjdjM2I4NjlmNmIz/LmpwZw", min: 150, max: 350, unit: "pack" },
    { name: "Sweet Pineapple", image: "https://imgs.search.brave.com/xpxXyVcLGMcGocfRoo9gQHDuuKItSM5HNcRZ_QA6znc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzE4LzQ0LzQ3/LzM2MF9GXzIxODQ0/NDc3NV9tWFFZNnR4/N1ZSRmtSaW1GeWxY/dmVDN2xvQmdwYXpr/Qy5qcGc", min: 30, max: 80, unit: "piece" },
    { name: "Kiwi Fruits", image: "https://imgs.search.brave.com/JS_2W_NqkWI8RTI76JEa1A27c-JHN6FYfhfc8Ytlulg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzEv/OTkwLzQ2Mi9zbWFs/bC9mcmVzaC1raXdp/LXdpdGgtbGVhdmVz/LW9uLWEtd29vZGVu/LXBsYXRlLXBob3Rv/LmpwZw", min: 20, max: 40, unit: "piece" },
    { name: "Pomegranate", image: "https://imgs.search.brave.com/z4Oj67ZyZoe1BtscMDma8CC6hWr2LXr5-PZcs3y5qaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NjgzMzkxL3Bob3Rv/L2Nsb3NlLXVwLW9m/LXBvbWVncmFuYXRl/cy1wYWNrZWQtaW4t/c2hpcHBpbmctY3Jh/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVJwMmNzVEFr/UTR5ZzNZVW9WRFU1/UjNDOVdySXI0V216/bTNhZlNPanF0bm89", min: 60, max: 140, unit: "kg" },
    { name: "Watermelon", image: "https://imgs.search.brave.com/5iHssZ4yxJatpMgn65zIJviZf0nwB0j0PV-TZpPhRrI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NjM2OTI4L3Bob3Rv/L3dhdGVybWVsb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWUxTXJHZHkzaUZu/RmcwQ0pwTWFCOV9F/eXgzX3lkNng2YjBE/RjhJaFFELXM9", min: 20, max: 50, unit: "kg" },
    { name: "Muskmelon", image: "https://imgs.search.brave.com/fD-_0_DqZVahRFvsTL05VPlq4Hk_ZpWVLt6eSe-MJvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zYWxh/c2RhaWx5LmNvbS9j/ZG4vc2hvcC9wcm9k/dWN0cy9NdXNrbWVs/b25fMTAyNHgxMDI0/LmpwZz92PTE2Nzgy/OTYxNTE", min: 25, max: 60, unit: "kg" },
    { name: "Papaya", image: "https://imgs.search.brave.com/u5HcIUnvvQ-fgZ6kk-qZQRMF1hrN-qVGzb6lAEnXOUI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAy/NTE5Mjc5NC9waG90/by93aG9sZS1hbmQt/aGFsZi1yaXBlLXBh/cGF5YS13aXRoLWdy/ZWVuLWxlYXZlcy1p/c29sYXRlZC1vbi13/aGl0ZS1iYWNrZ3Jv/dW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz05bzhMVWpI/a2w3anFBbERHYmNM/YUZaZFkxay0wNlFr/eEF6MTMwellpc3lR/PQ", min: 20, max: 50, unit: "kg" },
    { name: "Guava", image: "https://imgs.search.brave.com/Gs3peiDUEDP90rTC4Gxv8baFCnu9A8cHEAR1eqxXi2s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MjEyMDg1Ni9waG90/by93aG9sZS1hbmQt/c2xpY2VzLWd1YXZh/LWZydWl0LXdpdGgt/bGVhdmVzLWlzb2xh/dGVkLW9uLXdoaXRl/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU5KS1c4cXNDa1Zz/eG1KUkRtNHc0aURW/ODJoY2NoTmxSTjZW/NDFKVDdMRjA9", min: 40, max: 80, unit: "kg" },
    { name: "Pear", image: "https://imgs.search.brave.com/9PpD_PKKJFmiDgeh98TCBrulZO-NN5reKPzXlkzUjJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/MDI2NTc3Ny9waG90/by9yZWQteWVsbG93/LXBlYXJzLWZydWl0/LWlzb2xhdGVkLW9u/LXdoaXRlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1Sa0dS/Sjd2M1kweXJrTTMx/STd5ZkxCbkUtMTlX/dUNIRG9QWWNBRkg4/WHdBPQ", min: 100, max: 200, unit: "kg" },
    { name: "Plums", image: "https://imgs.search.brave.com/s7_EuMfI3peFhBebtf3MkOd4qeo25eyT1LZ3k4ALZNs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE1/OTM3MTM4My9waG90/by9yYXctamFtdW4t/YmxhY2stcGx1bS1v/ci1qYXZhLXBsdW0t/b24tYW4td29vZGVu/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU9ITjRnUDZFczRC/dUx6SEdRR0o4SlRE/YlFGTVdzUlNXQXVQ/U1pWSksxa0U9", min: 80, max: 180, unit: "kg" },
    { name: "Peaches", image: "https://imgs.search.brave.com/ZV5GIUVjQ6qOi0Cmu8KyfXOk3pYCntS_LhI_4FogiyY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/NDI1LzE3Mi9zbWFs/bC9hLWJhc2tldC1v/Zi1wZWFjaGVzLXBo/b3RvLmpwZw", min: 120, max: 250, unit: "kg" },
    { name: "Cherries", image: "https://imgs.search.brave.com/rl5i2gRYqqEmjao8i2BcymV7113_BjH_a1yGDHE9iKU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNDgw/ODkwNDkvc3RvY2st/cGhvdG8tcmlwZS1j/aGVycmllcy1vbi13/b29kZW4tdGFibGU", min: 200, max: 500, unit: "kg" },
    { name: "Lychee", image: "https://imgs.search.brave.com/e1gAnv_Pf-_X0CY6Y0CeEtbs6e6-ramJ54gc0ApfZfU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/NTY0NjEwNS9waG90/by9seWNoZWUtd2l0/aC1sZWF2ZXMtaXNv/bGF0ZWQtb24td2hp/dGUtYmFja2dyb3Vu/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9dHpkYUxIVGNf/MGFIZG9Vam82NVdY/VGtYTEVMei1Bam5k/YTMxdU1aNGRNUT0", min: 80, max: 180, unit: "kg" },
    { name: "Dragon Fruit", image: "https://imgs.search.brave.com/ZgNFB9sDxUp4NuHNqlAVkEMBUi6aTJdP7_bNnnqtX0w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzA3LzU4LzE5/LzM2MF9GXzEwNzU4/MTkxN190cmE0NHVi/Tm5qNDRzazljZEln/YkZiaEdZWnhoaEo3/US5qcGc", min: 80, max: 150, unit: "piece" },
    { name: "Custard Apple", image: "https://imgs.search.brave.com/R3jj00bwFaJg4F2LDGks7_ByH70pGPCv6y39cBTMG5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzUxLzUwLzY5/LzM2MF9GXzE2NTE1/MDY5MDdfamV1SGxw/SGpjNFhWUTFmTE5K/cjhjSWllMVZ4S1RT/Nk0uanBn", min: 60, max: 120, unit: "kg" },
    { name: "Jackfruit", image: "https://imgs.search.brave.com/qpyjDUeSXp11tJ3Ohfrv9dH9kySx70PSLTbuywpCQ-k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEyLzA2LzU2/LzM2MF9GXzMxMjA2/NTY1OV9VMlZUeEts/N2VMQ3NJcHhvaFNi/UFNYZjRsQVFoNzZM/Uy5qcGc", min: 40, max: 100, unit: "kg" },
    { name: "Blueberries", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=800&auto=format&fit=crop&q=80", min: 150, max: 300, unit: "pack" },
    { name: "Raspberries", image: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=800&auto=format&fit=crop&q=80", min: 180, max: 350, unit: "pack" },
    { name: "Blackberries", image: "https://imgs.search.brave.com/yyRAM_ajyQ2xL4ZVhEAS_UN2AvUUwYpf5z1ab4nz3z8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ibGFj/a2JlcnJ5LXBpY2tl/ZC1yaXBlLWJsYWNr/YmVycmllcy1jdXAt/YWdhaW5zdC1iYWNr/Z3JvdW5kLWJ1c2gt/YnJhbmNoZXMtZnJl/c2gtYmVycmllcy1n/YXJkZW4taGFydmVz/dGluZy0zOTUzMzg2/OTUuanBn", min: 160, max: 320, unit: "pack" },
    { name: "Cranberries", image: "https://imgs.search.brave.com/TMIOke-CJ9QxF4Do5Qnd0qhkKr9GGZip8ELRzelEIxY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mcmVz/aC1jcmFuYmVycmll/cy0yNzI0MTgxNS5q/cGc", min: 140, max: 280, unit: "pack" },
    { name: "Apricots", image: "https://imgs.search.brave.com/2dG4lSKdj7IoB4qFdjpdXZcaGwnPm4V038qNR54LF_g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mcmVzaC1vcmdh/bmljLWFwcmljb3Rz/LXdvb2Rlbi1ib3ds/LXJ1c3RpYy13b29k/ZW4tYmFja2dyb3Vu/ZF8xMDQ4OTQ0LTI5/MTY0MjQ0LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA", min: 100, max: 220, unit: "kg" },
    { name: "Figs", image: "https://imgs.search.brave.com/EF1B5va7P2B5GuqlSZ8hTkSa6QV3aLhvpSm6kDYXrT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/MzU3NjQzL3Bob3Rv/L2ZyZXNoLWZpZ3Mu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUs5cW1BSVBCN3NJ/V3JoTzFQRzdjd1JX/cGFFQm40UVlpY081/bFZyMTBpZEU9", min: 120, max: 250, unit: "kg" },
    { name: "Dates", image: "https://imgs.search.brave.com/QliVdxY7w1hetCZYDV_C_Hv97F6nJ2vs7HEn-MHLIOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/MzI3NjU2Ni9waG90/by9jbG9zZS11cC1v/Zi1mcmVzaC1kYXRl/LWZydWl0LWluLWEt/Ym93bC1vbi10YWJs/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bDhoNUVXSmMw/a1M4WGhHQnVIMWds/a2xhcjVxVjFEX1RJ/Rk9iVms3bFV2az0", min: 200, max: 500, unit: "kg" },
    { name: "Coconut", image: "https://imgs.search.brave.com/iVc-I7WBaKd7dQl3dTfmK18QumrtseCWYDB9Z9qyVJU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/NTczMDQ5Ni9waG90/by9jb2NvbnV0LWp1/aWNlLWFuZC1mcmVz/aC15b3VuZy1ncmVl/bi1jb2NvbnV0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1x/N21qNnpHeV93MFFi/a3d3emZxTWg5YVZI/NFN0dGNkbjNKdk9r/a3E1d1dNPQ", min: 20, max: 40, unit: "piece" },
    { name: "Lemons", image: "https://imgs.search.brave.com/5JlEOEhBWxlLiFIWpxex7BZacxktqaMzKP4wfSiRAeE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vaW1hZ2Vz/LXByb2QuaGVhbHRo/bGluZS5jb20vaGxj/bXNyZXNvdXJjZS9p/bWFnZXMvQU5faW1h/Z2VzL2xpbWUtdnMt/bGVtb24tMTI5Nng3/MjgtZmVhdHVyZS5q/cGc_dz0xMTU1Jmg9/MTUyOA", min: 30, max: 80, unit: "kg" },
    { name: "Limes", image: "https://imgs.search.brave.com/l95QT-9xc18nOzA2nANUsCrbYoZM1kvhpK6rYvacYc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ymx1ZWJvb2tzZXJ2/aWNlcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDMv/TGltZXNfS1lDX0Zl/YXR1cmVkX0ltYWdl/LmpwZw", min: 25, max: 60, unit: "kg" },
    { name: "Grapefruit", image: "https://imgs.search.brave.com/u6Hs1k61jUUJDTMdvIDgoMO7KkAFSCnJD-bAIJR59ok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/NTgxOTQ3L3Bob3Rv/L2dyYXBlZnJ1aXRz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz12ZjZHLUpGS2M5/MUZCOVA3ZThNbDdY/UjNmQVB2VGU4VzhD/eDlxSXFsNktJPQ", min: 40, max: 100, unit: "kg" },
    { name: "Tangerines", image: "https://imgs.search.brave.com/xDthxH-vRqKxWaiXk2nu-n4h2q6ziLIfKVdwrpu_Eao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFCNm94ME1lbkwu/anBn", min: 50, max: 120, unit: "kg" },
    { name: "Persimmon", image: "https://media.istockphoto.com/id/601115944/photo/persimmon.jpg?s=612x612&w=0&k=20&c=6lCOKUwfUGHpgSvUPIVkeOWnnsXMmV-NVuzriwWQnQY=", min: 80, max: 180, unit: "kg" },
    { name: "Passion Fruit", image: "https://imgs.search.brave.com/PuX1kvVq6O_9tOFOQQI1FcXL4kuYTNGXlcdXx0sR-ZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzkyLzEyLzEx/LzM2MF9GXzI5MjEy/MTE3NF84Y1ZuZkUw/VmhtZEtmY2ZLZVpD/ejluNDFpZ01FaG1r/Zy5qcGc", min: 60, max: 140, unit: "kg" }
  ];
  
  fruits.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "fruits",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Fresh and delicious ${item.name.toLowerCase()}, rich in vitamins and nutrients.`,
      unit: item.unit,
      inStock: Math.random() > 0.1,
      deliveryTime: "30-45 mins",
      weightOptions: generateWeightOptions(basePrice, item.unit === "piece" ? "pack" : item.unit, item.name)
    });
  });
  
  // Vegetables (40 products) - Realistic Indian prices
  const vegetables = [
    { name: "Fresh Carrots", image: "https://www.isaaa.org/kc/cropbiotechupdate/files/images/104202361119AM.jpg", min: 20, max: 50, unit: "kg" },
    { name: "Potatoes", image: "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg", min: 15, max: 40, unit: "kg" },
    { name: "Onions", image: "https://tiimg.tistatic.com/fp/1/007/649/100-fresh-organic-onions-used-in-cooking-vegetables-salads--090.jpg", min: 20, max: 60, unit: "kg" },
    { name: "Tomatoes", image: "https://img.freepik.com/free-photo/top-view-ripe-fresh-tomatoes-with-water-drops-black-background_141793-3432.jpg?semt=ais_hybrid&w=740&q=80", min: 20, max: 60, unit: "kg" },
    { name: "Capsicum", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtNqZk-jPmQnUbAmSaoDctfDlJMFr_r1xow&s", min: 40, max: 100, unit: "kg" },
    { name: "Cauliflower", image: "https://www.neoflam.com.au/cdn/shop/articles/cauliflower_image_a7647855-dc53-427b-9c64-4a6f23762733.jpg?v=1744344281", min: 20, max: 50, unit: "piece" },
    { name: "Broccoli", image: "https://media.istockphoto.com/id/1364035705/photo/fresh-broccoli-on-white-background.jpg?s=612x612&w=0&k=20&c=fEcEq65rKBmT8PltpAyg_-na0WomTJ6S6m04uXQQtJs=", min: 40, max: 100, unit: "kg" },
    { name: "Spinach", image: "https://media.istockphoto.com/id/522189977/photo/spinach.jpg?s=612x612&w=0&k=20&c=WnfMaNx-yOhh393DZ4lyG6tF3Hp2osD6PEmuOKsTvWs=", min: 10, max: 30, unit: "bunch" },
    { name: "Lettuce", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjboGBBDu48RDNQxlMCzMUubrcBcsknZhCiw&s0", min: 30, max: 70, unit: "piece" },
    { name: "Cabbage", image: "https://www.lovefoodhatewaste.com/sites/default/files/styles/16_9_two_column/public/2022-07/Cabbage.jpg.webp?itok=kC_qEday", min: 15, max: 40, unit: "piece" },
    { name: "Beetroot", image: "https://media.istockphoto.com/id/493446908/photo/fresh-sliced-beetroot-on-wooden-surface.jpg?s=612x612&w=0&k=20&c=z94X8FkGe5Mm6lN5HcZsGaD4nm_vMlkdlBzhut1spes=", min: 20, max: 50, unit: "kg" },
    { name: "Radish", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMcFDUMqyv87chpRfTtnbnOPVzhythaGO_w&s", min: 15, max: 40, unit: "bunch" },
    { name: "Turnip", image: "https://media.istockphoto.com/id/628310684/photo/rustic-organic-turnips-on-genuine-wood-background-for-vegetarian-food.jpg?s=612x612&w=0&k=20&c=6b9j2NIJGjTC1l58vc26OmGXzmKk50fkYx6BJOgi8Yc=", min: 20, max: 50, unit: "kg" },
    { name: "Brinjal", image: "https://www.shutterstock.com/image-photo/close-image-eggplant-fresh-raw-600nw-2619786935.jpg", min: 20, max: 60, unit: "kg" },
    { name: "Lady Finger", image: "https://kyssafarms.com/cdn/shop/products/lady-finger.jpg?v=1600955405", min: 30, max: 80, unit: "kg" },
    { name: "Beans", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutTVY36Mt8qLi9Miuc0xzeVW_qaoirp9h3Q&s", min: 40, max: 100, unit: "kg" },
    { name: "Peas", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9BEVf0OHtfImHMEU3RXYcmo-zSn9zHVuug&s", min: 60, max: 150, unit: "kg" },
    { name: "Cucumber", image: "https://www.greendna.in/cdn/shop/products/cucumber_1_700x.jpg?v=1594219681", min: 15, max: 40, unit: "kg" },
    { name: "Pumpkin", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTUj77TosLATbxSKf0OhDQ45lctl4AuQZ1w&s", min: 20, max: 50, unit: "kg" },
    { name: "Bottle Gourd", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwj_6F31fbNtyeDJxnC3kQd6vIZouEt9QBQ&s", min: 20, max: 50, unit: "kg" },
    { name: "Ridge Gourd", image: "https://media.istockphoto.com/id/606014430/photo/fresh-angled-loofah-angled-gourd-fruit.jpg?s=612x612&w=0&k=20&c=tdw10kSKaCiV2HXn5m39P-oVFwi-MZxDRfnzLynK0kw=", min: 30, max: 70, unit: "kg" },
    { name: "Bitter Gourd", image: "https://cdn.pixabay.com/photo/2021/08/09/21/49/bitter-gourd-6534410_1280.jpg", min: 40, max: 100, unit: "kg" },
    { name: "Sweet Corn", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTps6V_oXENr7w5Q8KBt2y-JkjG-ly959kYOw&s", min: 20, max: 50, unit: "piece" },
    { name: "Garlic", image: "https://media.istockphoto.com/id/1340230644/photo/closeup-of-garlic-bulbs-on-wooden-table-with-garlics-blur-background-a-set-of-fresh-garlic-on.jpg?s=612x612&w=0&k=20&c=ViGupj8zL6dDwWKe79V5R2J_NyUqIMLpHduY1e58LGM=", min: 100, max: 250, unit: "kg" },
    { name: "Ginger", image: "https://imgs.search.brave.com/EoS3p7dbddp6dDRFxLTFztVkuse6Z1SifcnM2WccPyc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzU5LzY3LzMz/LzM2MF9GXzU1OTY3/MzM0Nl9DVjFsVjFi/ZFdGTGpEd3MxQzVl/NFpydkFXZlI0TnZh/Vi5qcGc", min: 80, max: 200, unit: "kg" },
    { name: "Spring Onion", image: "https://static.toiimg.com/thumb/msid-117610547,width-1280,height-720,imgsize-2069095,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg", min: 15, max: 40, unit: "bunch" },
    { name: "Coriander Leaves", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8p5c5Gn2pbg19ouwkpE6-Z0jppYHDmkxbw&s", min: 5, max: 20, unit: "bunch" },
    { name: "Mint Leaves", image: "https://media.istockphoto.com/id/1164307019/photo/fresh-leaf-mint-green-herbs-ingredient.jpg?s=612x612&w=0&k=20&c=ZACUcQJgHsNYP8iUi6i4q1wUos6feXTKTq_Km4xyBR0=", min: 10, max: 30, unit: "bunch" },
    { name: "Curry Leaves", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gfnTr0S4jETpuBwsfLHIcnJ8Rt_glaze3A&s", min: 5, max: 15, unit: "bunch" },
    { name: "Fenugreek Leaves", image: "https://www.trustbasket.com/cdn/shop/articles/Methi.webp?v=1680170581", min: 10, max: 25, unit: "bunch" },
    { name: "Drumsticks", image: "https://freshggies.in/cdn/shop/files/drumstick-cut_-_FGCUTVEG38_b9a46178-cf09-4026-813d-7680b58a0857.jpg?v=1745380038", min: 40, max: 100, unit: "kg" },
    { name: "Ash Gourd", image: "https://static.sadhguru.org/d/46272/1633204872-1633204871619.jpg", min: 20, max: 50, unit: "kg" },
    { name: "Snake Gourd", image: "https://imgs.search.brave.com/ZUa4HKRF8jTd6ZI6O7TU4T-UrlyilkuVxaosotZqDCw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNDE4/ODg4NTQwL3N0b2Nr/LXBob3RvLWZyZXNo/LWhlYWx0aHktc25h/a2UtZ291cmQtc3Rv/Y2stc2hvcA", min: 30, max: 70, unit: "kg" },
    { name: "Pointed Gourd", image: "https://media.istockphoto.com/id/1530833955/photo/a-collection-of-pointed-gourd.jpg?s=612x612&w=0&k=20&c=Fa6492SwrG3dTs3tBeo-Z8ym3pFBtkSAYSbNKd9tpNw=", min: 50, max: 120, unit: "kg" },
    { name: "Yam", image: "https://media.post.rvohealth.io/wp-content/uploads/2023/09/whole-and-halved-raw-african-yam-1296x728-header.jpg", min: 30, max: 80, unit: "kg" },
    { name: "Colocasia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wHlfRZsjxYHfL3dJYQbwogdBRosGgu8QNg&s", min: 40, max: 100, unit: "kg" },
    { name: "Elephant Yam", image: "https://www.bbassets.com/media/uploads/p/l/40099659_2-fresho-elephant-foot-yam-premium-institutional.jpg", min: 30, max: 70, unit: "kg" },
    { name: "Cluster Beans", image: "0https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmMo7E8_EDwjuSaKvLP5sBihhwK7gZJg4MNA&s", min: 40, max: 100, unit: "kg" },
    { name: "Broad Beans", image: "https://www.jiomart.com/images/product/original/590000154/broad-beans-1-kg-product-images-o590000154-p590000154-0-202501031744.jpg?im=Resize=(1000,1000)", min: 50, max: 120, unit: "kg" },
    { name: "Green Chilies", image: "https://fruitboxco.com/cdn/shop/products/VG-CL-20_600x.jpg?v=1588920882", min: 20, max: 60, unit: "kg" }
  ];  
  vegetables.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "vegetables",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Fresh organic ${item.name.toLowerCase()}, perfect for your daily cooking.`,
      unit: item.unit,
      inStock: Math.random() > 0.05,
      deliveryTime: "30-45 mins",
      weightOptions: item.unit === "kg" ? generateWeightOptions(basePrice, "kg") : [{ value: item.unit === "piece" ? "1 piece" : "1 bunch", price: basePrice }]
    });
  });
  
  // Dairy & Eggs (25 products) - Realistic Indian prices
  const dairy = [
    { name: "Organic Milk", image: "https://imgs.search.brave.com/m2IjGb2TB9LSJB01KDDr6FHtdNg7zor9M18cjeDJInE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aWlt/Zy50aXN0YXRpYy5j/b20vZnAvMS8wMDQv/MTc1L29yZ2FuaWMt/bWlsay0xNzQuanBn", min: 50, max: 80, unit: "litre" },
    { name: "Farm Fresh Eggs", image: "https://imgs.search.brave.com/J7RPc5T1CDzEutYYtHdFd3-pSIDvJ_AOvQOw_2oSheU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU1/YzM2NDhiZTRiMDhj/MDU5MzJhODJkNS8x/NjU2NDQxNjQwNDE5/LTFMRUpaU0JYVTZT/NFpWTVo2RERHL2hl/bGxvLWktbS1uaWst/cDFSUVBmekNNNVUt/dW5zcGxhc2guanBn", min: 60, max: 120, unit: "dozen" },
    { name: "Paneer", image: "https://imgs.search.brave.com/2ek8JhTigCeOvxkm2QtYWozNHIqFzvZWapks7FNsZlw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9jdWJlcy1p/bmRpYW4tcGFuZWVy/LWNoZWVzZS1vbi0y/NjBudy0yNjE3MjE0/ODY3LmpwZw", min: 200, max: 400, unit: "kg" },
    { name: "Butter", image: "https://imgs.search.brave.com/wiVCz163ve6wND3vCFvtvwMgctSzXITHyn900XwTO9o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjcv/OTA0LzUyMi9zbWFs/bC9mcmVzaC1ob21l/bWFkZS1icmVhZC1h/bmQtYnV0dGVyLW9u/LXJ1c3RpYy13b29k/ZW4tdGFibGUtZ2Vu/ZXJhdGVkLWJ5LWFp/LWZyZWUtcGhvdG8u/anBn", min: 50, max: 100, unit: "pack" },
    { name: "Cheese Slice", image: "https://imgs.search.brave.com/YGVSq-R6qU-RNADnGt0sIg_KjVDdOIOGDLC-hlTO78g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jaGVl/c2Utc2xpY2VzLXBh/cnNsZXktaXNvbGF0/ZWQtd2hpdGUtYmFj/a2dyb3VuZC10b3At/dmlldy0xNDA1MTAw/MTQuanBn", min: 80, max: 160, unit: "pack" },
    { name: "Mozzarella Cheese", image: "https://imgs.search.brave.com/5SfnhUn8ZX4EWZIV0jvAbYnixl5RzEPmb2c4x_AIrxc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTkv/MjIxLzk4My9zbWFs/bC9hLXBsYXRlLW9m/LW1venphcmVsbGEt/Y2hlZXNlLWFuZC10/b21hdG9lcy1waG90/by5qcGc", min: 300, max: 600, unit: "kg" },
    { name: "Cheddar Cheese", image: "https://imgs.search.brave.com/5_Do3onblQHtwRWn378eBFMhPXourn52dPNJP0RxIis/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9vcmdh/bmljLXNoYXJwLWNo/ZWRkYXItY2hlZXNl/LWN1dHRpbmctYm9h/cmQtMzc2NTQ5NzQu/anBn", min: 350, max: 700, unit: "kg" },
    { name: "Yogurt", image: "https://imgs.search.brave.com/5fbj7WATM6kn8ncOismAqXfiSKV68BuZfLbnkYKGbZo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by95b2d1cnQtd2l0/aC13aGl0ZS1iYWNr/Z3JvdW5kLWhpZ2gt/cXVhbGl0eS11bHRy/YS1oZF82NzAzODIt/NjE1ODEuanBnP3Nl/bXQ9YWlzX3NlX2Vu/cmljaGVkJnc9NzQw/JnE9ODA", min: 40, max: 80, unit: "pack" },
    { name: "Curd", image: "https://imgs.search.brave.com/N336Emx0lX7xuHSOlCyg0rHbbNIy10kDAUUk91jfA00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVncmVjaXBlc29m/aW5kaWEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDEyLzA1/L2hvdy10by1tYWtl/LWN1cmQtcmVjaXBl/LTEtMjgweDI4MC5q/cGc", min: 30, max: 60, unit: "pack" },
    { name: "Buttermilk", image: "https://imgs.search.brave.com/gLFoevqXdB0VIKdUXxf6Nf5xN9XGO_itZrTlwsiqzSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWxp/c3Nha25vcnJpcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDMvcG91cmlu/Z21pbGtpbnRvamFy/d2l0aGJ1dHRlcm1p/bGtjdWx0dXJlLTIt/MTAyNHg2ODMuanBn", min: 20, max: 40, unit: "litre" },
    { name: "Cream", image: "https://imgs.search.brave.com/mBNGZuqXpoaYl3W81nYGQaoCx5PiUbNWfXiybibwxVI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAx/MjAzNjU2MC9waG90/by9tb2lzdHVyaXpl/ci1jcmVhbS1pbi1j/b250YWluZXIuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXJB/bFFGVEdWTXlzMnRm/S2VfRE9wSEs1WHhR/dW40X195dzBmUmpI/RzNDekk9", min: 80, max: 160, unit: "pack" },
    { name: "Fresh Cream", image: "https://imgs.search.brave.com/lVHQug80-DOoHArxeRXrJyfKNLM1ty_2hxLm6nJrG50/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTgx/ODkyMDA2L3Bob3Rv/L2Jvd2wtb2Ytc291/ci1jcmVhbS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9aldQ/WUJNUlpuRHJuZnVa/YUlibFhxakdsNkVs/T0FhM3pGZThtemxw/bDBHST0", min: 100, max: 200, unit: "pack" },
    { name: "Sour Cream", image: "https://imgs.search.brave.com/Jsc852YUZy1v6gSqEcL3qw1qeFrZJ6M6HAj5tf7c1LQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ib3ds/LXNvdXItY3JlYW0t/eW9ndXJ0LWRpcC1i/b3dsLXNvdXItY3Jl/YW0teW9ndXJ0LWRp/cC10b3J0aWxsYS1j/aGlwcy1ydXN0aWMt/a2l0Y2hlbi10YWJs/ZS0zNzk2MDg1MzEu/anBn", min: 90, max: 180, unit: "pack" },
    { name: "Condensed Milk", image: "https://imgs.search.brave.com/gcl16v59zojNYZt-G6jMb34VCBSgB_YldEIXdHXVV9o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDI1LzIv/NDkxNDA4MTIxL0lJ/L0JEL1BaLzI0NTcy/NTkwL2luc3RhbnQt/Y29uZGVuc2VkLW1p/bGstcG93ZGVyLTUw/MHg1MDAuanBlZw", min: 60, max: 120, unit: "tin" },
    { name: "Milk Powder", image: "https://imgs.search.brave.com/Qi2mh6NCW5-rGSZmWs2-RgwoMVT53taUagWYfsRFJ98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iYWJ5/LW1pbGstcG93ZGVy/LWNhbnMtb3Blbi1z/cG9vbi03NDY3MTI0/OS5qcGc", min: 400, max: 800, unit: "kg" },
    { name: "Ice Cream", image: "https://imgs.search.brave.com/aA5e1qxRiyh9bBw7CK9CDHmf1fYiRh-NuvzVpAv9cTw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAw/NTQ4MTk2L3Bob3Rv/L2ljZS1jcmVhbS1z/Y29vcHMtaW4tYm93/bC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SGIxU20zMkR2/Tk5PdjBHc2NDR0pK/RDF6Um13OTdOUUI3/Q2lEZnRlZWVFND0", min: 100, max: 250, unit: "tub" },
    { name: "Custard", image: "https://imgs.search.brave.com/tvvB8wGIvUkoFggoLc1a7ZTnIthBZNg-_DqaaWuk13k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/OTc1LzA5Ni9zbWFs/bC9jbG9zZS11cC10/b3Atdmlldy1vZi1p/bmdyZWRpZW50cy1q/YXBhbmVzZS1jdXN0/YXJkLXB1ZGRpbmct/amFwYW5lc2UtZm9v/ZC1haS1nZW5lcmF0/ZWQtcGhvdG8uanBn", min: 50, max: 100, unit: "pack" },
    { name: "Whipped Cream", image: "https://imgs.search.brave.com/rabc4eRgb3J9kZ6lhm8XwXK3QtG-tkXgxWfUlZO4V5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaW91c2VhdHMu/Y29tL3RobWIvTmt4/N25taTVENmZLckht/WWtMb3BVd3FUWHJz/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/MjAyMjEyMDUtSG93/VG9XaGlwQ3JlYW0t/QW1hbmRhU3VhcmV6/LTI2LTY2MDBlZTU0/ZjhkZDQ2NmY5ZjJm/NTI2OWQyNGFmY2I2/LmpwZw", min: 120, max: 240, unit: "can" },
    { name: "Cottage Cheese", image: "https://imgs.search.brave.com/iBaILLIJoyDOVSFiUfWdSbXoe6nY6EhvpZGsHtesLvw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE3/Njc3ODg2Mi9waG90/by9jb3R0YWdlLWNo/ZWVzZS1hbmQtc3Ry/YXdiZXJyaWVzLW9u/LWEtd2hpdGUtdGFi/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVpEenlNVGtL/RHV3VndBY2sxVVp3/YldiV0poNzl6NnI0/YVpESDhhOUIzV289", min: 180, max: 350, unit: "kg" },
    { name: "Feta Cheese", image: "https://imgs.search.brave.com/JAxFTK3SMjszQ1TsUC18k4QR2eF1DA8bFaBQpRruUTc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/NTA1LzcyNC9zbWFs/bC9ncmVlay10cmFk/aXRpb25hbC1mZXRh/LWNoZWVzZS1jdWJl/cy1waG90by5qcGc", min: 400, max: 800, unit: "kg" },
    { name: "Goat Cheese", image: "https://imgs.search.brave.com/dDX4N93zIXEti4K9q63cVz83LeMdsJJCKXDV4-vriy0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzczLzI3LzA3/LzM2MF9GXzI3MzI3/MDcxM18yZldZNnlO/cFI0TjIxQnlvY0tn/WWFNeDlqNnFMaWJD/Yi5qcGc", min: 500, max: 1000, unit: "kg" },
    { name: "Ricotta Cheese", image: "https://imgs.search.brave.com/PlVhMMzJz1X0kddTQfsMQ45JNkBdgtk5YvjdxHOculc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDUv/NzMzLzQwMi9zbWFs/bC9yaWNvdHRhLWl0/YWxpYW4td2hleS1j/aGVlc2UtcGhvdG8u/anBn", min: 350, max: 700, unit: "kg" },
    { name: "Khoya", image: "https://imgs.search.brave.com/8klLJ2tWEv38TnYKrifrxrwJoYKQs7OdaKD7lDWZTr0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzEwL21hd2Eta2hv/eWEtcmVjaXBlLndl/YnA", min: 250, max: 500, unit: "kg" },
    { name: "Malai", image: "https://imgs.search.brave.com/mbfUGCyuTwyweQCAkLL_gzf6OlDMHuLvjQLj_Lb3klo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9yYXMtbWFs/YWktc3dlZXQtZGlz/aC1pbmRpYS0yNjBu/dy0yODAzNTE3ODQu/anBn", min: 80, max: 160, unit: "pack" }
  ];
  
  dairy.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "dairy",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Premium quality ${item.name.toLowerCase()}, rich in nutrients.`,
      unit: item.unit,
      inStock: Math.random() > 0.05,
      deliveryTime: "30-45 mins",
      weightOptions: generateWeightOptions(basePrice, item.unit === "tin" || item.unit === "tub" || item.unit === "can" ? "pack" : item.unit, item.name)
    });
  });
  
  // Bakery (20 products) - Realistic Indian prices
  const bakery = [
    { name: "Whole Wheat Bread", image: "https://imgs.search.brave.com/50FTzgPtlLJtIM2KaZry2RhU7SZ4qQNSgit4SMPidYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzI0LzE2Lzc3/LzM2MF9GXzE1MjQx/Njc3MjRfaGNycUlD/ODJDeXE1WlhmWlJK/VGVqWnUzMXNQeUs2/dUguanBn", min: 40, max: 80, unit: "pack" },
    { name: "White Bread", image: "https://imgs.search.brave.com/NROcmmc9HOl6J2LAemCzkjc6fZfYeyARLLaLPIoPbt8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NjA1LzA0MC9zbWFs/bC9zbGljZWQtYnJl/YWQtZm9vZC1vbi1h/LXdoaXRlLWJhY2tn/cm91bmQtcGhvdG8u/anBn", min: 30, max: 60, unit: "pack" },
    { name: "Brown Bread", image: "https://imgs.search.brave.com/7VzsZP8CFZ_bxGMkWkxDuGLUJKgToZR6ZG_13z-u5b0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDgv/NzQwLzkzNy9zbWFs/bC9mcmVzaC1icm93/bi1yeWUtYnJlYWQt/aXNvbGF0ZWQtYWdh/aW5zdC1hLXRyYW5z/cGFyZW50LWJhY2tn/cm91bmQtcG5nLnBu/Zw", min: 45, max: 90, unit: "pack" },
    { name: "Multigrain Bread", image: "https://imgs.search.brave.com/jmbDpsk9S3HpfVs7barirHCXhwZnVHnP5cCERfV2OFE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGV3/b2tzb2ZsaWZlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMC9tdWx0aWdy/YWluLWJyZWFkLXJl/Y2lwZS0xOC5qcGc", min: 50, max: 100, unit: "pack" },
    { name: "Garlic Bread", image: "https://imgs.search.brave.com/xugI-I2Q-34WApiid2fYs_Ob_zZhCwEgM7JDKno7Ao0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by90d28taGFs/dmVzLWdhcmxpYy1i/dXR0ZXItYnJlYWQt/MjYwbnctMjA5NTM2/ODg4Ni5qcGc", min: 60, max: 120, unit: "pack" },
    { name: "Bread Rolls", image: "https://imgs.search.brave.com/pNqetLtMsQXVSw7hZTyxd1PRT1eXdDlw6t8uUbDIDBY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NzI2Mzk2/MDE4NzItZWVjZWIw/YzVjNTIyP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE9Y/eDhZbkpsWVdRbE1q/QnliMnhzYzN4bGJu/d3dmSHd3Zkh4OE1B/PT0", min: 20, max: 40, unit: "pack" },
    { name: "Bun", image: "https://imgs.search.brave.com/6eWr0Zm4GCuj3RWsb27WvZC0221_JT7JozIwRoScTwA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDcv/ODY5LzY2My9zbWFs/bC9idW4tZm9yLWJ1/cmdlci1waG90by5q/cGc", min: 15, max: 30, unit: "piece" },
    { name: "Croissant", image: "https://imgs.search.brave.com/YLnSbHL9OJvZZJyLPwEj3ZgMUDZwY-eBR2lzuyhTmsQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTQv/OTUwLzg1OC9zbWFs/bC9zaW5nbGUtYmFr/ZWQtYnJvd24tY3Jv/aXNzYW50LXBuZy5w/bmc", min: 40, max: 80, unit: "piece" },
    { name: "Donut", image: "https://imgs.search.brave.com/MYImrjWp-iie_V-00MXLSWbKsxdXV0_QKXoOojRMtTA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/OTQyNDQwOC9waG90/by9kb251dC1mb3It/YnJlYWtmYXN0LW9u/LXdvb2QtYm9hcmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PV9kRVh4dnllY0hy/Z2t0V1RzNmNuLXll/V24wN0tmZ1pNUnZI/VnNNd0Rqb009", min: 30, max: 60, unit: "piece" },
    { name: "Muffin", image: "https://imgs.search.brave.com/rlRgeHvBrnST6CbdoyXih_ZHhS2-y4xoOs2aEOoLYxI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vdmFyaWFu/dHMvMlZwcHRwYmIx/ZlBITUtqSjY0RmRH/YlhQLzYyNGYwZGMx/ZGZmOWJkY2NhYjAz/MmY5M2MzM2U3OWRl/Nzg0ODE3NzBlNzll/MjFkM2IwNDY5ZGFm/NTFmMDI3OTc", min: 40, max: 80, unit: "piece" },
    { name: "Cupcake", image: "https://imgs.search.brave.com/ikIvs3MmndT1V7aYEsH9r0UB3PUnlrUJSC0IXpaZXjo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE4ODE5/NzIxNTYtM2M2ZWFm/NWNjZTJmP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1U/ZDhmR05vYjJOdmJH/RjBaU1V5TUdOMWNH/TmhhMlY4Wlc1OE1I/eDhNSHg4ZkRBPQ", min: 35, max: 70, unit: "piece" },
    { name: "Cookies", image: "https://imgs.search.brave.com/kw45pOhcG-DaKghwmjl8HdXoD1MNJ-MaKy4SaHRRbco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb29raWVzLXZh/cmlvdXMtZmxhdm9y/c18xMTYwMjMxLTI3/ODMwLmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA", min: 50, max: 150, unit: "pack" },
    { name: "Biscuits", image: "https://imgs.search.brave.com/_lr67JTN0JhzFlvYX67AvQD-oPLMXzk4KGzmYzjAbOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvTUVxNHJKeWV1/cW8vaHFkZWZhdWx0/LmpwZw", min: 30, max: 100, unit: "pack" },
    { name: "Cake Slice", image: "https://imgs.search.brave.com/Apl2vvZl8pmc9YgstiR1GglrAppslQK7Lt6oqS3wbHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDcv/Mjc5LzQ5OC9zbWFs/bC9hLXNsaWNlLW9m/LWNha2Utd2l0aC1j/aG9jb2xhdGUtYW5k/LXdoaXRlLWljaW5n/LWZyZWUtcGhvdG8u/anBn", min: 50, max: 120, unit: "piece" },
    { name: "Pastry", image: "https://imgs.search.brave.com/-_ajuDVdNutiR2ZvqdTM2wofUVTKMwsH1x4tDk2JCBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTMv/MTU4LzI1Ny9zbWFs/bC9iYW5hbmEtYm9s/ZW4taXMtbWFkZS1m/cm9tLWJhbmFuYXMt/YW5kLXBhc3RyeS1k/b3VnaC1maWxsZWQt/d2l0aC1jaG9jb2xh/dGUtYW5kLWNoZWVz/ZS1pdC1pcy1zZXJ2/ZWQtb24tYS13b29k/ZW4tcGxhdGUtaW4t/YS1zZWxlY3RpdmUt/Zm9jdXMtc3R5bGUt/aW1hZ2UtZnJlZS1w/aG90by5qcGc", min: 40, max: 80, unit: "piece" },
    { name: "Puff Pastry", image: "https://imgs.search.brave.com/j75MkNGMCD4Nl4INOQWix-pnZ9mifuaMP3vx1Le0-bg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzY2LzE1LzAy/LzM2MF9GXzY2MTUw/MjU5Xzh0ZVdPNm5R/YTZnRGRPbUhXUXNj/TUZzZWxkTm9XMWRW/LmpwZw", min: 60, max: 120, unit: "pack" },
    { name: "Pizza Base", image: "https://imgs.search.brave.com/C9UO_e90k3xEr7b7a1ccBMKSJ_ffupb3UO2tHq-KHdw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGVsbG93ZWlyZG91/Z2guaW4vY2RuL3No/b3AvZmlsZXMvRnVs/bFNpemVSZW5kZXJf/NjIzZDE2YjgtMTNm/OC00Mjg5LTkyMWQt/MWI3OWM1MzU2Njhk/LmpwZz92PTE3NDQ3/MDc3MTAmd2lkdGg9/MTQ0NQ", min: 30, max: 60, unit: "piece" },
    { name: "Burger Buns", image: "https://imgs.search.brave.com/2mlUeNjxxGurtMKHgn_4Fx_l14eX-jReSMITEb7SKME/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/NjMwLzY5NC9zbWFs/bC9zaG90LW9mLWEt/aGFtYnVyZ2VyLWJy/ZWFkLWJ1bi1pc29s/YXRlZC1mcmVlLXBo/b3RvLmpwZw", min: 40, max: 80, unit: "pack" },
    { name: "Hot Dog Buns", image: "https://imgs.search.brave.com/d2yQVWhfnYZCxafpI1ZVwJ5UtMrAB2eeIx0R47VcQz8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2LzU2LzUxLzA0/LzM2MF9GXzE2NTY1/MTA0MzJfS3ZSY2di/eURpb2VCNURubFVG/aUptTWxyTmZ4Sm90/Q2cuanBn", min: 35, max: 70, unit: "pack" },
    { name: "Bagels", image: "https://imgs.search.brave.com/DhNwYT4uostpn5SEC_WvhuRac3CRv-7iPHqGe8dh0Yw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90cmFk/aXRpb25hbC1ob21l/bWFkZS1iYWdlbHMt/c2FsZS1mYXJtZXJz/LW1hcmtldC0yOTc0/NzYxOS5qcGc", min: 50, max: 100, unit: "pack" }
  ];
  
  bakery.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "bakery",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Freshly baked ${item.name.toLowerCase()}, perfect for your meals.`,
      unit: item.unit,
      inStock: Math.random() > 0.1,
      deliveryTime: "30-45 mins",
      weightOptions: item.unit === "piece" ? [{ value: "1 piece", price: basePrice }] : [
        { value: "Small Pack", price: Math.round(basePrice * 0.5) },
        { value: "Regular Pack", price: basePrice },
        { value: "Family Pack", price: Math.round(basePrice * 2) }
      ]
    });
  });
  
  // Beverages (30 products - Alcohol Free) - Realistic Indian prices
  const beverages = [
    { name: "Mineral Water", image: "https://imgs.search.brave.com/yj5OKlV1CNDqheMP6P_LATTfudxM0gemKc_4zSSmbno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDg4/NjM2MDYzL3Bob3Rv/L21pbmVyYWwtd2F0/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVFaRGlFMnYt/NzgwRWlvQTFlNWxQ/clVDVjZBVktpRy1p/dUVWSnduNGJfT0E9", min: 20, max: 40, unit: "litre" },
    { name: "Bisleri Water", image: "https://imgs.search.brave.com/ZC-47tugESAQ4dIJXS0IbAcc-xhucn2f0fkt5T9Cwg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDI1LzEy/LzU3MDYxODY4MS9O/Ry9BUS9ITy8xOTA4/MzI1NzIvMS1sdHIt/YmlzbGVyaS13YXRl/ci1ib3R0bGUtNTAw/eDUwMC5qcGc", min: 20, max: 40, unit: "litre" },
    { name: "Kinley Water", image: "https://imgs.search.brave.com/zSBReMRgWhcu6XSCxVaKx7cvrUm_mKvSxvdK-sSeBjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuamRtYWdpY2Jv/eC5jb20vdjIvY29t/cC9kZWZfY29udGVu/dC9uY2F0X2lkL2tp/bmxleS1taW5lcmFs/LXdhdGVyLWlmbmJp/bzItMjUwLmpwZz93/PTY0MCZxPTc1", min: 20, max: 40, unit: "litre" },
    { name: "Coca Cola", image: "https://imgs.search.brave.com/dVPdMFC1LlU2VFuDCDYBWPrKg76e2xRCmaM4SaclOM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE3/NTMzNTgzNi9waG90/by92aW50YWdlLWNv/Y2EtY29sYS1ib3R0/bGVzLWFyZS1zZWVu/LWluLWEtc2hvcC13/aW5kb3ctaW4tbWFu/aGF0dGFuLW5ldy15/b3JrLWNpdHktdW5p/dGVkLXN0YXRlcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MUo0WHpSWnFUZ3VS/dkw2aDkzM0pINFd3/UF9pQWE1bGF6Qmdn/VVV3U3g5dz0", min: 40, max: 100, unit: "bottle" },
    { name: "Pepsi", image: "https://imgs.search.brave.com/ICIolRbjIhb3RRC7HqUYdZtiP_TZigCY5NqD_GGvhhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/LnNpdGVjb3JlY2xv/dWQuaW8vcGVwc2lj/by01djl3Y2kyMC9t/ZWRpYS9CcmFuZHMv/UGVwc2kvQmVudG8t/R3JpZC1JbWFnZXJ5/L3BlcHNpLWNsYXNz/aWMtMTJvei1vbi1p/Y2UtdG0tNDg2MC1y/ZWZyZXNoZWQuanBn/P2lhcj0wJnc9Mzg0/MCZxPTc1", min: 40, max: 100, unit: "bottle" },
    { name: "Thums Up", image: "https://imgs.search.brave.com/OQ6cK9Uxx4gjO7BK7MiNDRxYtzUXekj794WaTsVxGw8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGNjYi5pbi9pbWFn/ZXMvdGh1bXBzdXBf/ZGVzay5wbmc", min: 40, max: 100, unit: "bottle" },
    { name: "Sprite", image: "https://imgs.search.brave.com/TqvVlfhi8Eptp4OuzJCpYOCRa0jk7rG6e4PeHnHVNA8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zcHJp/dGUtZ3JlZW4tY2Fu/LWNhcmJvbmF0ZWQt/ZHJpbmtzLWpha2Fy/dGEtaW5kb25lc2lh/LW1heS10aC1wYWNr/YWdpbmctZGVzaWdu/LWlzb2xhdGVkLXN1/cGVybWFya2V0LXJv/dy1zaGVsZi1kaXNw/bGF5LWJhY2tncm91/bmQtMzE5NjQ0MzY5/LmpwZw", min: 40, max: 100, unit: "bottle" },
    { name: "Fanta", image: "https://imgs.search.brave.com/jldFINO-T33T8kI6nWqoJtE5SI-Xuwpqe7nJ4Ca_JaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE0LzM3LzY0Lzcy/LzM2MF9GXzE0Mzc2/NDcyMTBfdXF4MjVH/V21aOEROSFBXUmVT/MFFnNlpYeWQ5bzF2/VmUuanBn0", min: 40, max: 100, unit: "bottle" },
    { name: "Limca", image: "https://imgs.search.brave.com/oGK2rhBON-9cqAhB9iU8zWzQ4qy6tCOUJ14zwcQxiBs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/emVwdG9ub3cuY29t/L3Byb2R1Y3Rpb24v/aWstc2VvL3RyOnct/NjQwLGFyLTEyMDAt/MTIwMCxwci10cnVl/LGYtYXV0byxxLTgw/L2Ntcy9wcm9kdWN0/X3ZhcmlhbnQvM2Zk/MTU2MmMtOTgyZS00/ODkwLWFlY2UtMjA5/YWMwNDRhZDMwL0xp/bWNhLUxlbW9uLVNv/ZnQtRHJpbmsuanBl/Zw", min: 40, max: 100, unit: "bottle" },
    { name: "7 Up", image: "https://imgs.search.brave.com/kmqiAMKOHXDLQ4kaEVs-RP0KTTJkg4n0-KEzZB-yPzU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvN3Vw/LVBORy1QaG90by5w/bmc", min: 40, max: 100, unit: "bottle" },
    { name: "Mountain Dew", image: "https://imgs.search.brave.com/z8gEQYKui46omkkH1tivCSwvu80hk6yS1WbIWnfySSU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/OTMxNTM3OS9waG90/by9tb3VudGFpbi1k/ZXctY2Fucy1hcmUt/c2Vlbi1hdC10aGUt/c2hvcC1pbi10aGlz/LWlsbHVzdHJhdGlv/bi1waG90by10YWtl/bi1pbi1rcmFrb3ct/cG9sYW5kLW9uLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1n/NmdyNF9vYUVZT3ZX/SE9Od2QwMUc3ajhT/aW4yWUx3WnlpQWtH/dHBVc1RNPQ", min: 40, max: 100, unit: "bottle" },
    { name: "Mirinda", image: "https://imgs.search.brave.com/wkSFc_QjDiMmTyApMaXouSeNjtLQgyVzVrWI-idBBKM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9taXJp/bmRhLWdsb2JhbC1i/cmFuZC1mcnVpdC1m/bGF2b3JlZC1jYXJi/b25hdGVkLWRyaW5r/cy1vcmlnaW5hdGlu/Zy1zcGFpbi1jdXJy/ZW50bHktb3duZWQt/YW1lcmljYW4tZ2lh/bnQtNDI2MDA2Mjkx/LmpwZw", min: 40, max: 100, unit: "bottle" },
    { name: "Maaza", image: "https://imgs.search.brave.com/ycnzw954QJgTvFetehfjXiSFJVk4-cst60N2dPJr5jI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC85/YjBjNjUxNjcyMzM5/OTkuWTNKdmNDd3pO/VEE0TERJM05ETXNN/Q3d4TVRFeC5qcGc", min: 30, max: 80, unit: "tetra" },
    { name: "Slice", image: "https://imgs.search.brave.com/Ggtzxv56Eo-E1KYhVAbpI1mXw3BBwLXZGWcc7ePuL_E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFMT0grbENlZUwu/anBn", min: 30, max: 80, unit: "tetra" },
    { name: "Paper Boat Drinks", image: "hhttps://imgs.search.brave.com/QQGS6e0xj1Ce7ViposmwxKSzwmv-jTHtI676CQukbP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90cmF2/ZWx0YWxlc2Zyb21p/bmRpYS5pbi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNC8wMy9w/YXBlcmJvYXQtMS5q/cGc", min: 25, max: 60, unit: "tetra" },
    { name: "Fruit Juice", image: "https://imgs.search.brave.com/ZP7sPxwjjxsHjauRw2QJXLJrmqCFQCmHkZ9s9BwVN9Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE3LzEwLzc4LzMx/LzM2MF9GXzE3MTA3/ODMxODVfRFkzTEwx/MWV0NjJncUdLbE9B/MnBNNmtpOU44MHRG/Q3kuanBn", min: 50, max: 120, unit: "litre" },
    { name: "Mango Juice", image: "://imgs.search.brave.com/M-9_ABJ8LCxXRxMMfnhhCmg6EG8veefWJeiZWcvwYf8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tYW5nby1qdWlj/ZS1nbGFzcy1tYW5n/by1mcnVpdF80NDE5/MjMtMTg5OS5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA", min: 60, max: 150, unit: "litre" },
    { name: "Orange Juice", image: "https://imgs.search.brave.com/5lzRMdE1ZxoyPg9NMIEDg11KPGikuQ5D5lA4RajR4PI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/Njk3Lzk3MS9zbWFs/bC9vcmFuZ2UtanVp/Y2UtaWxsdXN0cmF0/aW9uLWFpLWdlbmVy/YXRpdmUtZnJlZS1w/aG90by5qcGc0", min: 55, max: 130, unit: "litre" },
    { name: "Apple Juice", image: "https://imgs.search.brave.com/yxXqWgUrMpCkGU-EElTl0sqEiVNLMHk_FaQdQSvufQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9hcHBs/ZS1qdWljZS0xNDE1/NDcyNC5qcGc", min: 70, max: 160, unit: "litre" },
    { name: "Mixed Fruit Juice", image: "https://imgs.search.brave.com/tdiDRqp0lVuav1bCY9Ueu8e5x2ndxrnW6LXIjIMMqv8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/MzI4LzI4OC9zbWFs/bC9haS1nZW5lcmF0/ZWQtZnJ1aXQtc3Bs/YXNoaW5nLWludG8t/YS1nbGFzcy1vZi1q/dWljZS1vbi1hLWJs/YWNrLWJhY2tncm91/bmQtcGhvdG8uanBn", min: 65, max: 140, unit: "litre" },
    { name: "Energy Drink", image: "https://imgs.search.brave.com/V74q7mMgDHJHeykpQj1XrRnfVo_2AML4swSTw622Sas/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/MjUwbWwtY2FuLW1v/Y2t1cC1lbmVyZ3kt/ZHJpbmstbWV0YWxp/Yy1jYW5fNjY5ODc0/LTIwNC5qcGc_c2Vt/dD1haXNfaHlicmlk/Jnc9NzQwJnE9ODA", min: 80, max: 150, unit: "can" },
    { name: "Red Bull", image: "https://imgs.search.brave.com/-zg-nb6edQdGTjoPFb4oAyfvn7gnKS3uoq-JOuxAxcc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9pY2UtY29s/ZC1pY2VkLXRlYS1s/ZW1vbi0yNjBudy0x/OTM4NjEyNTY1Lmpw/Z", min: 30, max: 70, unit: "bottle" },
    { name: "Cold Coffee", image: "https://imgs.search.brave.com/H3jFW7Zg6JdmIeW3R1aKMahY93DJT4mevw-PdcuPh9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MTYxODY5Mi9waG90/by9wcmVwYWlyaW5n/LWljZWQtbGF0dGUt/b24td29vZGVuLXRh/YmxlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1IMlUyZkta/VHpqcnRjblJnTnFm/dlpxREFEZHZDcU4t/bWUyUnQya1ZUZFJv/PQ", min: 40, max: 90, unit: "bottle" },
    { name: "Milk Shake", image: "https://imgs.search.brave.com/tXCZeJpWvlree6tuD4tNCN0YF2c4Z7-D7q7oVC33a-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/MTM3Mzk5NC9waG90/by9taWxrLXNoYWtl/cy1pbi1wbGFzdGlj/LWN1cHMtYW5kLXN0/cmF3cy1vbi1hLWRh/cmstd29vZGVuLXRh/YmxlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ZMjByMlc0/WXdNaWZId1Z4UUE4/cHd4M0hUYUJuSG9C/aFptRHRTdUxHSHd3/PQ", min: 50, max: 120, unit: "bottle" },
    { name: "Smoothie", image: "https://imgs.search.brave.com/NZo9DQIlRRkdGs1blZt1D9RCZXs07sHcwLJ4gfb7bXU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zbW9v/dGhpZXMtdGhyZWUt/Zmxhdm91cmVkLWph/cnMtNDg3Mzc0Nzcu/anBn", min: 60, max: 140, unit: "bottle" },
    { name: "Coconut Water", image: "https://imgs.search.brave.com/hGYrEgEHD-h9PI0fJ0n9hX1eIFip6QoepAq4BWrlmXs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mcmVz/aC1jb2NvbnV0LXdh/dGVyLWNvY29udXQt/ZnJlc2gtY29jb251/dC13YXRlci1nbGFz/cy1jb2NvbnV0LTk4/MzA2MzgyLmpwZw", min: 30, max: 70, unit: "tetra" },
    { name: "Sports Drink", image: "https://imgs.search.brave.com/VwcuQVD6tkc7ErwZNyton_5RT6mJ-SW89d1acns1ytE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzQ0LzM2LzE4/LzM2MF9GXzc0NDM2/MTg5N196dlVXbFk5/dkpZc2xic1pkclB2/Z2lEVHpSb1FabTli/WC5qcGc", min: 40, max: 90, unit: "bottle" },
    { name: "Soda", image: "https://imgs.search.brave.com/AD_zxIRE-L6xy1KCJgoB-Cz8ZJXB5tBwcrRcknQinyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzk2LzM5LzM2/LzM2MF9GXzU5NjM5/MzYyMV93OXNidTVk/Vjd3V250dzFlbG9B/T3dqMzlIMnJFbzZD/RC5qcGc", min: 20, max: 50, unit: "bottle" }
  ];

  beverages.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "beverages",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Refreshing ${item.name.toLowerCase()}, perfect for daily hydration and energy.`,
      unit: item.unit,
      inStock: Math.random() > 0.05,
      deliveryTime: "30-45 mins",
      weightOptions: generateWeightOptions(basePrice, item.unit === "tetra" || item.unit === "can" ? "bottle" : item.unit, item.name)
    });
  });
  
  // Snacks & Chips (35 products) - Realistic Indian prices
  const snacks = [
    { name: "Potato Chips", image: "https://imgs.search.brave.com/s3Y2ilPEHMRG6mL1cjZUiqmhukyfsAr9z_-dnLhs68I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/OTgwNzIyNi9waG90/by90aGUtZ2lybC10/YWtlcy1jcmlzcHkt/ZnJpZWQtZmF0dHkt/cG90YXRvLWNoaXBz/LWZyb20tYS1nbGFz/cy1ib3dsLW9yLXBs/YXRlLW9uLWEtd2hp/dGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPU54ZVJWeVZn/MmVORFBQUklXV0FY/YU8yU1V0RjBKZVJy/LWdQNzRmWGtCREU9", min: 20, max: 50, unit: "pack" },
    { name: "Corn Chips", image: "https://imgs.search.brave.com/JdWNtafdbnk2i1XNjtrUtqbdJSRMULKU-iiTl73hpn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/MDQ5MjAwNC9waG90/by9jcnVuY2h5LXNh/bHQtY29ybi1jaGlw/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NldVVDAtUmp6/aGJhXy1BTjk1eW9z/ZGQxOWVYRE1YbWNx/RHpJVjg5LVpHWT0", min: 25, max: 60, unit: "pack" },
    { name: "Tortilla Chips", image: "https://imgs.search.brave.com/5vAoC7ZEHpqnb_vPHAdjBxET2RSgas99o9SiQ111dMM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2hhcm1pc3Bhc3Np/b25zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNS8wNC90/b3J0aWxsYS1jaGlw/cy1zdGVwMTQuanBn", min: 30, max: 70, unit: "pack" },
    { name: "Pretzels", image: "https://imgs.search.brave.com/ztQ4eVsAzkRaYAJMW_7OkKUdZW90De85sGb8mUw8ptU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/ODgyLzA2NS9zbWFs/bC9kZWxpY2lvdXMt/cHJldHplbHMtb24t/YS1icmlnaHQteWVs/bG93LWJhY2tncm91/bmQtcmVhZHktZm9y/LXNuYWNraW5nLXBo/b3RvLkpQRw", min: 40, max: 90, unit: "pack" },
    { name: "Popcorn", image: "https://imgs.search.brave.com/bLqAKmWFzxM7lqoUOxyS2m-7uXw1xXXOs-df_efAetE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcmVw/YXJlZC1wb3Bjb3Ju/LWZyeWluZy1wYW4t/Y29ybi1zZWVkcy1j/b3JuY29icy1ib3ds/LWtpdGNoZW4tdGFi/bGUtc2VsZWN0aXZl/LWZvY3VzLTYxODEz/ODc2LmpwZw", min: 30, max: 80, unit: "pack" },
    { name: "Nuts Mix", image: "https://imgs.search.brave.com/QpBPkytgRkqEJPsMmUm9IS6leqNK_xkDp4HxnHC9JRU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjIx/MzAzNDY1Mi9waG90/by9vdmVyaGVhZC12/aWV3LW9mLW51dHMt/YW5kLXNlZWRzLWlu/LWEtYm93bC1pc29s/YXRlZC1vbi13aGl0/ZS1iYWNrZ3JvdW5k/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1WakFhLXhHQTFn/ZWR0aVJjRWFfUXlT/dzhiVzlIa3JCYkcy/VWY2SkQyazdnPQ", min: 100, max: 250, unit: "pack" },
    { name: "Almonds", image: "https://imgs.search.brave.com/RG9tH6t84TpWashgh5ub7wp0gh1jx_eOGWzACMvz06Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/NzY2LzAyNi9zbWFs/bC9haS1nZW5lcmF0/ZWQtc2hlbGxlZC1h/bG1vbmRzLXNvbGlk/LWJhY2tncm91bmQt/cGhvdG8uanBn", min: 500, max: 1000, unit: "kg" },
    { name: "Cashews", image: "https://imgs.search.brave.com/BZaj9SjQGJEUQ2y-z_FJsuSqrd3pCksS6eVC0p8e3XM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mb3Jh/Z2VycHJvamVjdC5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvYmxv/Zy1hbGwtYWJvdXQt/Y2FzaGV3c18zMWVi/MDYwYi04MDgyLTQ0/ZjMtYmNjZi1lODI0/NjhiZTFjYzcuanBn/P3Y9MTc1MjY2NjM5/MSZ3aWR0aD0xNDQw", min: 600, max: 1200, unit: "kg" },
    { name: "Walnuts", image: "https://imgs.search.brave.com/uG-Tqhe5VJlooQ9Z4CHhV9t9nHsbR0lEaMnyWYMF-Q4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ2/ODgxOTI3L3Bob3Rv/L3dhbG51dC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9X1ZY/dVFCdTVLUXRnalVX/V0RBckRybktpUkZN/OW8xbDhXbXE5cHVr/ZUp2QT0", min: 400, max: 900, unit: "kg" },
    { name: "Pistachios", image: "https://imgs.search.brave.com/BzFA_BVcJOfwPwgUGGWbyjj1_yLDv94tCg6wDgX76VE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXN0/YWNoaS5jb20vY2Ru/L3Nob3AvYXJ0aWNs/ZXMvcGlzdGFjaGlv/LW51dHNfNTE3MmEy/MDAtOTJjMC00OTZi/LThlNjUtNzE0MWVh/NzkyZTE3LmpwZz92/PTE3NjIzMzkwMDk", min: 700, max: 1500, unit: "kg" },
    { name: "Peanuts", image: "https://imgs.search.brave.com/0GfydngQATVMMO_RPEgzV-XtP_S_Uu4-RrjCqLz5Jb4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzUzOTk4NzIwOTUt/OTM2M2JmMjYyZTY0/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE0zeDhjR1Zo/Ym5WMGZHVnVmREI4/ZkRCOGZId3c", min: 120, max: 250, unit: "kg" },
    { name: "Trail Mix", image: "https://imgs.search.brave.com/4Xd_tSALX4YgXnmPI_UnuDyMcQx1ulcU0xvPKSNo8nk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjUv/OTI0LzAzMS9zbWFs/bC9hLWRlbGlnaHRm/dWwtYXNzb3J0bWVu/dC1vZi10cmFpbC1t/aXgtaW5ncmVkaWVu/dHMtcGVyZmVjdC1m/b3ItYS1oZWFsdGh5/LWFuZC10YXN0eS1z/bmFjay1waG90by5q/cGc", min: 150, max: 300, unit: "pack" },
    { name: "Granola Bars", image: "https://imgs.search.brave.com/B-YgZoxaCcD-ereEcPFFoVmdlE-8paTwmNfRe1h_KSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2VsbHBsYXRlZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDEvSG93LXRv/LU1ha2UtSGVhbHRo/eS1HcmFub2xhLUJh/cnMtNS5qcGc=80", min: 30, max: 70, unit: "pack" },
    { name: "Protein Bars", image: "https://imgs.search.brave.com/sqVjiqIuLzz1SIP1pAJg05cQVWkDHPtZcOKswJo6mJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTMv/NjE2Lzc4Mi9zbWFs/bC9wcm90ZWluLWJh/cnMtc2lkZS1ieS1z/aWRlLXdpdGgtbm8t/dG9wcGluZ3Mtb3It/ZGVjb3JhdGlvbnNy/ZWFsaXN0aWMtZm9v/ZC1waG90by5qcGc", min: 50, max: 120, unit: "pack" },
    { name: "Energy Bars", image: "https://imgs.search.brave.com/DHLpmYSiSXppZsCMBmgjfr5xGzYaI3GzMnzJggWIbLk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NzIwNDA3My9waG90/by9udXRzLWFuZC1v/YXRzLWVuZXJneS1t/aXgtYmFycy1vbi13/aGl0ZS1iYWNrZ3Jv/dW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz04Nk5lM3oz/YndsSVdEdXZvbjAz/LS1MZnFwXzNpajVi/eGZ1QVhlbTRFMUZv/PQ", min: 40, max: 100, unit: "pack" },
    { name: "Chocolate Bars", image: "https://imgs.search.brave.com/ydIlndEvHJT3ZizNhvNlw36tS9zk7sBSNd3x_eUTG5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NTc3LzM0MS9zbWFs/bC92YXJpZXR5LW9m/LWNob2NvbGF0ZS1i/YXJzLWFuZC10cnVm/Zmxlcy1pbi1kYXJr/LWFuZC1taWxrLWNo/b2NvbGF0ZS1zaGFk/ZXMtcGhvdG8uanBl/Zw", min: 20, max: 60, unit: "bar" },
    { name: "Candy", image: "https://imgs.search.brave.com/k9thdHeoU9IaMNKPsEb8uz07R8Xws9NIxHnlL81p-r4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NjcyMDg0L3Bob3Rv/L2hhbmQtaG9sZGlu/Zy1hLWJ1bmNoLW9m/LXJlZC1jYW5keS1m/YWxsaW5nLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1Rc2pG/UnBGS2dkMEtwTk9j/TWN0Tm5KejdENXBZ/UnBVUHRqVU1UZU5P/YzVRPQ", min: 10, max: 30, unit: "pack" },
    { name: "Gummies", image: "https://imgs.search.brave.com/GpQVyedqjVq2Nf-UwlbJtvFDIx0emq4oHL_KOI7DPoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/MzAwOTYzNy9waG90/by9vcmdhbmljLXZl/Z2FuLWd1bW15LXZp/dGFtaW5zLndlYnA_/YT0xJmI9MSZzPTYx/Mng2MTImdz0wJms9/MjAmYz16a0dWSG0y/emhPbVhESERKaW5N/aHhfbFFEdEVpM1Vs/YWZvUkpvNFpNTHdF/PQ", min: 15, max: 40, unit: "pack" },
    { name: "Licorice", image: "https://imgs.search.brave.com/gGFmMkqpFP1QaK_JZAhYJAk55bIkEXp2j2p1eWCEmRQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIx/NTQyNjAxNS9waG90/by9zb2Z0LWxpY29y/aWNlLWNhbmRpZXMt/b24tYS13aGl0ZS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1t/T2dUdzhNSjFyNy1M/M2c3bE5WU0M4aWlM/a3Q5QW11T09sbDhK/RVdmNzF3PQ", min: 20, max: 50, unit: "pack" },
    { name: "Caramel", image: "https://imgs.search.brave.com/0PEGbEH344bXqV0lY9J66q-w1Ii6Eq-_hv6FZQO4vLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/NjUzLzM5Mi9zbWFs/bC9haS1nZW5lcmF0/ZWQtZGVjYWRlbnQt/Y2FyYW1lbC1jYW5k/aWVzLWRyaXp6bGVk/LXdpdGgtc2F1Y2Ut/Zm9ybWluZy1hLXN3/ZWV0LWJhY2tncm91/bmQtdGVtcHRpbmct/dGV4dHVyZS1haS1n/ZW5lcmF0ZWQtcGhv/dG8uanBn", min: 25, max: 60, unit: "pack" },
    { name: "Toffee", image: "https://imgs.search.brave.com/VVyO1i1xdaXBfVcVx1NHuFbp4qkV04cyt7mwKYsSYHk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc4/NjI1NDM5L3Bob3Rv/L2JhY2tncm91bmQt/b2YtYnJvd24tdG9m/ZmVlLWNodW5rcy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/TDJLd3dTVTZSTXpo/U2F6Um9Eck5EV04w/X1dsQ1ZzeDJ5LWp6/TVd3ZzJNVT0", min: 30, max: 70, unit: "pack" },
    { name: "Fudge", image: "https://imgs.search.brave.com/1Hn60rUsiuQjOk0UyFKznrvrTSR6-Qx6SX6spE8aw44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVkZ2VraXRjaGVu/LmNvLnVrL2Nkbi9z/aG9wL2ZpbGVzL0No/b2NvbGF0ZS1DYXJh/bWVsLUhSLTQuanBn/P3Y9MTY3NDMzNzcy/MCZ3aWR0aD0zMjAw", min: 40, max: 90, unit: "pack" },
    { name: "Marshmallows", image: "https://imgs.search.brave.com/e9Iw3bRe3EFSEcNjPvsme493zLY2zGp-eRMc9TtzfLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/NTU5LzI5Ni9zbWFs/bC9kZWxpY2lvdXMt/bWFyc2htYWxsb3dz/LXN1c3BlbmRlZC1v/bi1za2V3ZXJzLXJl/YWR5LWZvci1yb2Fz/dGluZy1vdmVyLWEt/ZmlyZS1hdC1hLWNh/bXBzaXRlLWR1cmlu/Zy1hLWNvb2wtZXZl/bmluZy1waG90by5q/cGc", min: 50, max: 120, unit: "pack" },
    { name: "Cookies", image: "https://imgs.search.brave.com/05zEshzdEpugQut5Qi1L5eevbxJLteuR_C2HtgLFomg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvY29va2ll/cy1jaG9jby1jaGlw/cy1kZXRhaWxlZC1i/ZWF1dGlmdWwtMjYw/bnctMjI0OTcxMzA3/NS5qcGc", min: 30, max: 80, unit: "pack" },
    { name: "Biscuits", image: "https://imgs.search.brave.com/PhuteoM2AB06oDLTDfF0woehOFmMS0bZY12P8Vg0AX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZ2FydGh1cmJh/a2luZy5jb20vc2l0/ZXMvZGVmYXVsdC9m/aWxlcy9zdHlsZXMv/a2FmX3RodW1ibmFp/bC9wdWJsaWMvcmVj/aXBlX2xlZ2FjeS84/MDI3LTMtbGFyZ2Uu/anBnP2l0b2s9QzRn/alRmX04", min: 20, max: 60, unit: "pack" },
    { name: "Crackers", image: "https://imgs.search.brave.com/aMwI2nITJGezGUy0bdcIIA-gXydDFwz3hrTljg6KDDs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/NzM3MDQ2L3Bob3Rv/L2NoZWVzeS1jcmFj/a2Vycy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9TmdnVmw4/alpZQkRyRHlNNkxx/VVVXV0h3Vll2VHI2/UllnZVkzNFpsMDV2/ND0", min: 40, max: 100, unit: "pack" },
    { name: "Cheese Puffs", image: "https://imgs.search.brave.com/DLYAZv4VUdRJb41NrkTX1B2daz6q75ZR9P8in77iBrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2LzQ1LzgwLzkw/LzM2MF9GXzE2NDU4/MDkwNjlfRzZEbFJ1/RGR5MFlPT0lCdnVB/YmJ6ZXZCelZEWDA2/V2UuanBn", min: 25, max: 70, unit: "pack" },
    { name: "Veggie Sticks", image: "https://imgs.search.brave.com/6AS7abluq0kwVqWFxv2D4nh06AMF0FbNiKp7grolzFA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzQxNi80MTYveGlm/MHEvc25hY2stc2F2/b3VyaWUvcy9nL2ov/MjUtdmVnZ2llLXN0/aWNrcy1oZWFsdGh5/LWFuZC10YXN0eS1z/bmFjay1yZWFkeS10/by1lYXQtMS1ib3gt/b3JpZ2luYWwtaW1h/Z3R5dnVjNnJqaGNn/eS5qcGVnP3E9NzAm/Y3JvcD1mYWxzZQ", min: 35, max: 80, unit: "pack" },
    { name: "Rice Cakes", image: "https://imgs.search.brave.com/rN5ai-AsxSG_ejIEDy3pl6OImxvdt0eb88NnEwfbGys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/ZWxlY3RhYmxlLXB1/ZmZlZC1yaWNlLWNh/a2VzLXRyYXktdG93/ZWwtbWFyYmxlXzEx/NDU3OS01ODI5OC5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA", min: 30, max: 70, unit: "pack" },
    { name: "Pita Chips", image: "https://imgs.search.brave.com/tu-SHcjglEXlIbTXOfxelT24ESt9AA4drHn7I3KUVwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHJp/cGVkc3BhdHVsYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTgvMTIvaG9tZW1h/ZGUtcGl0YS1jaGlw/cy05LTY4MHg5NTIu/anBn", min: 40, max: 90, unit: "pack" },
    { name: "Banana Chips", image: "https://imgs.search.brave.com/kVDHv_dKvva0PFO3lUmE6cIELLXGu30dNQy6ZNK0kPQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/Mjc5MTcyOS9waG90/by9rZXJpcGlrLXBp/c2FuZy1vci1iYW5h/bmEtY2hpcHMtb3It/YmFuYW5hLWNyYWNr/ZXJzLWRlbGljaW91/cy1hbmQtYWRkaWN0/aXZlLWJhbmFuYS1z/cmlwaW5nLW1hZGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU1sNzhmR3dEY0pO/Ti16YmY2cExYS1Ey/RkhoVFpTakdiLTU3/ZEc3NFhMS289", min: 50, max: 120, unit: "pack" },
    { name: "Apple Chips", image: "https://imgs.search.brave.com/qo7hspr7fKuthKk3o_SFaSYd9QSF8WThFqsLJ_Zi9qQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9za2lu/bnltcy5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTIvMTEv/QmFrZWQtQXBwbGUt/Q2hpcHMtU25hY2st/UmVjaXBlLTUtZTE2/MTAzNzg1NTI1Nzgu/anBn", min: 60, max: 140, unit: "pack" },
    { name: "Dried Fruits", image: "https://imgs.search.brave.com/540lTt8dgAGxSbKmYMW2RGmZXFe6snTR4oyzbFOi1HE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/Njc4LzY1Ni9zbWFs/bC9hc3NvcnRlZC1k/cmllZC1mcnVpdHMt/aW5jbHVkaW5nLWZp/Z3MtYXByaWNvdHMt/cHJ1bmVzLWFuZC1k/YXRlcy1vbi13b29k/ZW4tdHJheS1pZGVh/bC1mb3ItcHJvbW90/aW5nLWhlYWx0aHkt/ZWF0aW5nLW5hdHVy/YWwtc25hY2tzLWFu/ZC1nb3VybWV0LWZv/b2QtcHJlc2VudGF0/aW9ucy1waG90by5q/cGc", min: 200, max: 500, unit: "kg" },
    { name: "Beef Jerky", image: "https://imgs.search.brave.com/ocN9jPouwjjPpZ-y9YdR4OEma_5XfjDon6feZcK0_ZU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZWVm/LWplcmt5LXNsYXRl/LXBsYXRlLWNsb3Nl/LXVwLTc1NTk0NTQy/LmpwZw", min: 100, max: 250, unit: "pack" },
    { name: "Pork Rinds", image: "https://imgs.search.brave.com/e0AQODM9Kll89JRTECCOhjrqrIBWDnTF2CKy6csaOr8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTY4/OTQwMDY1L3Bob3Rv/L2NyaXNweS1wb3Jr/LXJpbmRzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1sRzNC/VV8yWkFscUxtbmFV/Z2UtaDdzU2NWRnRZ/S2hEcnVHODQ3eDl2/MmQwPQ", min: 80, max: 200, unit: "pack" }
  ];
  
  snacks.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "snacks",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Delicious ${item.name.toLowerCase()}, perfect for snacking.`,
      unit: item.unit,
      inStock: Math.random() > 0.05,
      deliveryTime: "30-45 mins",
      weightOptions: item.unit === "kg" ? generateWeightOptions(basePrice, "kg") : [
        { value: "Small Pack", price: Math.round(basePrice * 0.5) },
        { value: "Regular Pack", price: basePrice },
        { value: "Family Pack", price: Math.round(basePrice * 2) }
      ]
    });
  });
  
  // Meat & Poultry (15 products) - Realistic Indian prices
  const meat = [
    { name: "Chicken Breast", image: "https://imgs.search.brave.com/9FDpKixxCUIRRcqNha_vbg7ZuoIIunWOgC3M5XQxpOU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU5/NzM4MTg4L3Bob3Rv/L2NoaWNrZW4tYnJl/YXN0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz05VUo3Tkpl/bThOYlhFTzhQeWRz/QjdxRmpkcTBDNk9Q/VWhmSHlaTF9uOGhR/PQ", min: 200, max: 400, unit: "kg" },
    { name: "Chicken Thighs", image: "https://imgs.search.brave.com/0qlQqDBE9VYC95y1OYeBX5VdnsY2ZvaJLDrOkQjVW0o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pb3dh/Z2lybGVhdHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEwL0Jha2VkLUNo/aWNrZW4tVGhpZ2hz/LWlvd2FnaXJsZWF0/cy1GZWF0dXJlZC1O/RVctNjAweDYwMC5q/cGc", min: 180, max: 350, unit: "kg" },
    { name: "Chicken Wings", image: "https://imgs.search.brave.com/9uVGlRZ2yZrBINVjeZxN1KggufqAcvKH-VsmwiMYXdk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M2LzNh/L2FkL2M2M2FhZGZk/NDU1MWRmOWZmZjJh/Mzk1MzcwMjE3NzYz/LmpwZw", min: 150, max: 300, unit: "kg" },
    { name: "Whole Chicken", image: "https://imgs.search.brave.com/GEaYxwnL_fDz6o2SthKRmm_2cg3QVJpYasE-GVErbMs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vNDkwMDU3/NjYvNDcyNzIvaS80/NTAvZGVwb3NpdHBo/b3Rvc180NzI3MjQ5/MjAtc3RvY2stcGhv/dG8tZnJlc2gtcmF3/LXdob2xlLWNoaWNr/ZW4tcGxhY2VkLmpw/Zw", min: 220, max: 450, unit: "kg" },
    { name: "Mutton", image: "https://imgs.search.brave.com/q2U6pGiT7RoReXkH0wHyx4oDBqDf2tOoMW6PvSx9OJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc0LzIwLzY3/LzM2MF9GXzI3NDIw/Njc0MV9kYmZXeFVI/dng2VkNXRnJkektY/REtxU214ZXA5ZXpE/Ny5qcGc", min: 500, max: 900, unit: "kg" },
    { name: "Lamb Chops", image: "https://urbanfarmandkitchen.com/wp-content/uploads/2024/11/marinated-greek-lamb-chops-18-500x500.jpg", min: 600, max: 1200, unit: "kg" },
    { name: "Goat Meat", image: "https://imgs.search.brave.com/wH-o_0PyYt9Bt42uX2t0-FidvcMYgFRzUdPhiXws3wA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzIzLzM1Lzkz/LzM2MF9GXzE1MjMz/NTkzNThfa20xa0x4/cExIVXMyUGNVZFVy/RU10dHYwQnNFaTNY/ZDEuanBn", min: 450, max: 850, unit: "kg" },
    { name: "Pork Chops", image: "https://imgs.search.brave.com/v3Gsi2HjqhFAYg2waGD6pBLlt0Ti2JAMF0cIPIl7Z6A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVm/b3JrZWRzcG9vbi5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDgvZ2FybGlj/LWJ1dHRlci1wb3Jr/LWNob3BzLXJlY2lw/ZS1waW50ZXJlc3Qt/cGluLWNvbGxhZ2Ut/My03MDB4MTA1MC5q/cGc", min: 300, max: 600, unit: "kg" },
    { name: "Bacon", image: "https://imgs.search.brave.com/FsnhIv2CgYZ5BUnoRYWc1q3WK5G_hGnerawcMR2DUCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNDEx/MDM3MC9wZXhlbHMt/cGhvdG8tNDExMDM3/MC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA", min: 400, max: 800, unit: "kg" },
    { name: "Sausages", image: "https://imgs.search.brave.com/MbW3GIO4q04f6353W4NzPyOomjf9heub-CjiwNhUoV0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjkw/MTg1NC9wZXhlbHMt/cGhvdG8tMjkwMTg1/NC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA", min: 250, max: 500, unit: "pack" },
    { name: "Ham", image: "https://imgs.search.brave.com/2WtfjTgq3-x-S4X28ghtkvVB0V9f1t6cKCpYSnSIyzk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTcz/NjE2MTQxL3Bob3Rv/L2Jha2VkLWhhbS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NTVTamh4UzZROV92/d2RqOGdvVC1oc3JK/cEpwOWFzeHBGeDJV/c2poNXY5az0", min: 350, max: 700, unit: "kg" },
    { name: "Turkey", image: "https://imgs.search.brave.com/ORR6bS-vdPyI9IFEBnbh4xIjFzBuDXNPOuGK-OzZSgQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzEv/NjExLzMwOS9zbWFs/bC90dXJrZXktZmls/bGV0LXNsaWNlLWZy/ZXNoLXBvdWx0cnkt/bWVhdC1oZWFsdGh5/LWVhdGluZy1jb29r/aW5nLWFwcGV0aXpl/ci1tZWFsLWZvb2Qt/c25hY2stb24tdGhl/LXRhYmxlLWNvcHkt/c3BhY2UtZm9vZC1i/YWNrZ3JvdW5kLXBo/b3RvLmpwZw", min: 400, max: 800, unit: "kg" },
    { name: "Duck", image: "https://imgs.search.brave.com/QQrg1TJ8obpYTr-Ga60sNhzCBnknfWvHu1XZhFUa0cM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/NTc4NzY3NS9waG90/by9idXRjaGVyZWQt/d2hvbGUtZHVjay1y/YXctYnJlYXN0LXN0/ZWFrLWxlZ3Mtd2lu/Z3Mtb24tYS1idXRj/aGVyLWN1dHRpbmct/Ym9hcmQtZ3JheS1i/YWNrZ3JvdW5kLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz02/c19taTZVTTF5VkZj/cG5hWUtweEp0cFFX/Mk9ZTExqT1hZeHhH/ZXF2djVJPQ", min: 300, max: 600, unit: "kg" },
    { name: "Quail", image: "https://imgs.search.brave.com/B5KbCZN50PG2trl4oRsk5mo2RsmwpSYV2qYB54QgpOs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmRv/Zm9vZHkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzEw/L0luZG9mb29keV9R/dWFpbF9CYXRlci5q/cGc", min: 200, max: 400, unit: "piece" },
    { name: "Rabbit", image: "https://imgs.search.brave.com/Y7M1kMD5IiFmpJiY3EAZ2i9I_bpZrp7U6ni5V3DBBvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTUw/MzQ1ODQ4L3Bob3Rv/L3Jhdy1yYWJiaXQt/bWVhdC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9WXpscmVJ/Rk90RFhBdkJBV3df/NVkxcGU5LXRPMzhR/ZXIybk9ic2t4cnhn/OD0", min: 350, max: 700, unit: "kg" }
  ];
    
  
  
  meat.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "meat",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Fresh ${item.name.toLowerCase()}, sourced from trusted farms.`,
      unit: item.unit,
      inStock: Math.random() > 0.1,
      deliveryTime: "30-45 mins",
      weightOptions: item.unit === "kg" ? generateWeightOptions(basePrice, "kg") : [{ value: "1 piece", price: basePrice }]
    });
  });
  
  // Fish & Seafood (12 products) - Realistic Indian prices
  const seafood = [
    { name: "Fresh Fish", image: "https://imgs.search.brave.com/rrBg43A79o4RXgYRBbOtxMiGTzNX-Tb-Hd3Nyh5N2I8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTIv/NDI2LzAzOS9zbWFs/bC90aWxhcGlhLW9u/LXdvb2Rlbi1jdXR0/aW5nLWJvYXJkLWJh/Y2tncm91bmQtZnJl/c2gtcmF3LXRpbGFw/aWEtZmlzaC1mcm9t/LXRoZS10aWxhcGlh/LWZhcm0tZnJlZS1w/aG90by5KUEc", min: 200, max: 500, unit: "kg" },
    { name: "Salmon", image: "https://imgs.search.brave.com/RpOYnwSm6usX9rS-e3pCkEA0doivoVqo7rq1t1JwwQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDcv/NDYxLzA3MC9zbWFs/bC93aG9sZS1mcmVz/aC1yYXctYmlnLXNh/bG1vbi1maXNoLXBo/b3RvLmpwZw", min: 600, max: 1200, unit: "kg" },
    { name: "Tuna", image: "https://imgs.search.brave.com/oyLtFN_PWn5GX4wYPShXKRXjNy0UFhEVQD7TuskuCJ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTE1/MzYyMjMvcGhvdG8v/YnVuY2gtb2YtdHVu/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9YlIycXdTZTlB/SzU0R1FCV2xYNXp1/VXpfS0E5WUpodThi/NGd3Wk1KS3Z5dz0", min: 400, max: 800, unit: "kg" },
    { name: "Prawns", image: "https://imgs.search.brave.com/3fjy-Q8o03vBmfPOlBzDuNEiRzadOsyDpVkgKO789xk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mcmVz/aC1wcmF3bnMtMTA4/NTc0MjIuanBn", min: 300, max: 700, unit: "kg" },
    { name: "Shrimp", image: "https://imgs.search.brave.com/tjDTDO7Fv-Rjz-s7u7BOtYuBh5Z-gY5LbwmRHSu7Ue8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIy/NjcwMTM0L3Bob3Rv/L2ZyZXNoLXNocmlt/cC1mcm9tLWhhbG9u/Zy1iYXktdmlldG5h/bS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9dzMycldpUTQ5/a2NBc1ZMSk94SnUy/SW9KbG5SOGtBRHJz/d3VhNFo1WF83cz0", min: 350, max: 750, unit: "kg" },
    { name: "Crab", image: "https://imgs.search.brave.com/NCTRfazOlYGNEkawtWPL-5SxPf80qNW2R8t0XfYyS98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/Njk1Lzc4NC9zbWFs/bC9jcmFiLW9uLXdo/aXRlLWJhY2tncm91/bmQtZ2VuZXJhdGl2/ZS1haS1waG90by5q/cGc", min: 400, max: 900, unit: "kg" },
    { name: "Lobster", image: "https://imgs.search.brave.com/rLXyIDRwtC2v2BMPklDPpvmOLWu_JHwuHMlCsSxmWn0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ymlnc2Ftcy5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/NS8xLTUtMzAweDMw/MC5wbmc", min: 800, max: 2000, unit: "kg" },
    { name: "Squid", image: "https://imgs.search.brave.com/ei6cyd8tTog2PO4ZSgj_Q4E3DhrhBlbqSzh3veol01c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAw/MjQvMTc4OC81Mjg0/L2ZpbGVzL2h1bWJv/bGR0LXNxdWlkLWRv/c2lkaWN1cy1naWdh/cy5qcGc", min: 250, max: 600, unit: "kg" },
    { name: "Octopus", image: "https://imgs.search.brave.com/E0ToI2wEFBJWSP3qvqP2HP-4bcVF-V4Ofg8zKHlc2yw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1Lzc2LzQ2LzE2/LzM2MF9GXzU3NjQ2/MTYzNl9RV2g3ZHA3/UkhlNEI1Vm83R2s5/cnkxZ0oweENhb09N/ei5qcGc", min: 300, max: 700, unit: "kg" },
    { name: "Mussels", image: "https://imgs.search.brave.com/b89oEP-sHDJf0pg3tYlVPaNfOScwEaFQpgieCOMYDB4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zZWEt/bXVzc2Vscy1yb3Bl/cy1iYWNrZ3JvdW5k/LWZyZXNoLW9wZW4t/bXVzc2VsLWNhYmxl/cy1zZWFmb29kLWl0/YWxpYW4tY3Vpc2lu/ZS02MjgwMjU0Mi5q/cGc", min: 200, max: 500, unit: "kg" },
    { name: "Clams", image: "https://imgs.search.brave.com/6bnQOD63uYaRJNViM1JBQVpQsAdmZJCkBkCb6o8ROCw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGlubmVyYXR0aGV6/b28uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA0L3N0/ZWFtZWQtY2xhbXMt/My5qcGc", min: 180, max: 450, unit: "kg" },
    { name: "Oysters", image: "https://imgs.search.brave.com/CFB_1AmHruTzXsBL9P-c7yfGWj1b8s7JonQsQJMv0lc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM5/NTM5OTAwMi9waG90/by9veXN0ZXJzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz03/VDdPQ1RLUWpZckZX/QlE2STRqbG9SZ0pa/aW1NRGdHaVp6dHhn/ZVd1ckxZPQ", min: 150, max: 400, unit: "kg" }
  ];
  

  seafood.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "seafood",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Fresh ${item.name.toLowerCase()}, perfect for seafood lovers.`,
      unit: item.unit,
      inStock: Math.random() > 0.15,
      deliveryTime: "30-45 mins",
      weightOptions: generateWeightOptions(basePrice, "kg")
    });
  });
  
  // Frozen Foods (18 products) - Realistic Indian prices
  const frozen = [
    { name: "Frozen Peas", image: "https://imgs.search.brave.com/FfEVe0hBAg5HOImQUFolAL6WlSvWXMb3DM1_aAksX0w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTcx/MzUxMDcxL3Bob3Rv/L2Zyb3plbi1ncmVl/bi1wZWFzLWluLWJv/d2wuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTdHelptZXBC/OExHQXpjeG5Gc2xH/SUtRa0ZfUHUybHM0/UmtvaGtPNHA3dWM9", min: 60, max: 120, unit: "pack" },
    { name: "Frozen Corn", image: "https://imgs.search.brave.com/ryJ-c5YYutJqfSLDfALiuQuA6iJZj2EgHCbcltVtxfQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mcm96/ZW4tY29ybi1rZXJu/ZWxzLXBsYXRlLTM1/MjU1NTA3LmpwZw", min: 50, max: 100, unit: "pack" },
    { name: "Mixed Vegetables", image: "https://imgs.search.brave.com/iRSwoH8bgIB1YEVgG--rVj56RgDWwhpfoxE3nKGOCa0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9taXhl/ZC12ZWdldGFibGVz/LXNhbGFkLWFzaWEt/dG9wLXZpZXctd29v/ZGVuLXRhYmxlLXNw/YWNlLXRleHQtMTEx/MzE3NTM2LmpwZw", min: 70, max: 140, unit: "pack" },
    { name: "French Fries", image: "https://imgs.search.brave.com/CrdK2ANEhhYfZy5Xye0G0uBTqbjTCr8HH-0-pFo1OJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzQv/ODE2LzQyMC9zbWFs/bC9hLWJvd2wtb2Yt/Z29sZGVuLWZyZW5j/aC1mcmllcy1zZXJ2/ZWQtb24tYS10ZXh0/dXJlZC1wbGFjZW1h/dC10b3Bkb3duLXZp/ZXctcGhvdG8uanBn", min: 80, max: 160, unit: "pack" },
    { name: "Potato Wedges", image: "https://imgs.search.brave.com/cKYD2zTQdHKwZUNOJ3nmgXad51jwMcliPwx4e1h-iMc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzA4LzY2Lzkz/LzM2MF9GXzEzMDg2/NjkzMTVfa01aZjZl/Wk5uQmZvV1lZNE4z/V0xaRXkzMExJcm9N/ZkouanBn", min: 90, max: 180, unit: "pack" },
    { name: "Chicken Nuggets", image: "https://imgs.search.brave.com/f-7hBrsUkL2qEiaW0_fp3JBRJvIvnYuZs66iLGBwgao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc5/MDgzNDg2L3Bob3Rv/L2NoaWNrZW4tbnVn/Z2V0cy1pbi1hLXdo/aXRlLWJvd2wuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUQx/V1VaWGt3TU9DejRi/am9uMXFheGRoc0lR/LUh1VnYyM1FiSzNt/S01iWm89", min: 150, max: 300, unit: "pack" },
    { name: "Fish Fingers", image: "https://imgs.search.brave.com/gwyPX8jDodaFh5LGuuEuk_Q_3s8kxcTdBja9tESJ_S4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ymlnc2Ftcy5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/Mi9GaXNoLSVFMiU4/MCU5My1GaW5nZXJz/LTctOS1GaW5nZXJz/LTIwMGcuanBn", min: 120, max: 250, unit: "pack" },
    { name: "Pizza", image: "https://imgs.search.brave.com/UqLOO5JB5BkW73LWpvFS7yoLf9HbIKYn61d6uWGsowU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTQv/MzAyLzYxNy9zbWFs/bC9waXp6YS10cmFk/aXRpb25hbC1pdGFs/aWFuLWN1aXNpbmUt/ZmFzdC1mb29kLWZy/ZWUtcGhvdG8uanBn", min: 100, max: 250, unit: "piece" },
    { name: "Burger Patties", image: "https://imgs.search.brave.com/SSpjjnttfsXVWbNAgfmNMvAfuN11N05ALwlvoJEW4iI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/MTI0MTMzNS9waG90/by90d28tcmF3LWJ1/cmdlci1wYXR0aWVz/LXdpdGgtdGh5bWUt/YW5kLXJlb3NlbWFy/eS1vbi13aGl0ZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZEN1eXVWWE84eEhZ/Mm5TNlY1N3pmZHNP/VWFmZ1o4MTVwMW9k/SC11NmszZz0", min: 80, max: 180, unit: "pack" },
    { name: "Samosas", image: "https://imgs.search.brave.com/JEGUVdJaixmREdHd2A1t2TAHVtFGlLE2UUwpDPh5oU4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcy/LmZyZWVqb2JhbGVy/dC5jb20vbmV3cy8y/MDI1LzA4L3NhbW9z/YS02OGIyY2U0Yzgx/OTE4NjcwMjQ5MDAt/MTIwMC53ZWJw", min: 40, max: 100, unit: "pack" },
    { name: "Spring Rolls", image: "https://imgs.search.brave.com/CQhNF4uZTG-2XfDhnXu_a99Dba3143igBjyShXMnf-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/MTEyLzEwNy9zbWFs/bC9haS1nZW5lcmF0/ZWQtc3ByaW5nLXJv/bGwtaXNvbGF0ZWQt/b24tYmFja2dyb3Vu/ZC1mcmVlLXBuZy5w/bmc", min: 60, max: 140, unit: "pack" },
    { name: "Dim Sum", image: "https://imgs.search.brave.com/tJ5LKgd6Ri_KTbQxqgx7W1eRFSiRQ1iHiKmSITwGrrc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlZm9vZHJhbmdl/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMDUvYmVl/Zi1tZWF0YmFsbC1k/aW0tc3VtLWluLWhv/bmcta29uZy0xMDI0/eDc2OC5qcGc", min: 80, max: 180, unit: "pack" },
    { name: "Ice Cream", image: "https://imgs.search.brave.com/QpEmA0cpDrUID4QmMkc2c0k-a-HJ1n1KQIsmHLPWIbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTAw/NTc4Nzc2L3Bob3Rv/L2ljZS1jcmVhbS1z/Y29vcHMtaW4tc3Vu/ZGFlLWN1cC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZjFf/QVplUmpfcUVwbUZp/SnpTNjdSekpnVDIz/QzZETHRrVi1JNEw1/WkNBQT0", min: 100, max: 250, unit: "tub" },
    { name: "Frozen Berries", image: "https://imgs.search.brave.com/QPxstqSze-bUCKO8ti1-hUO4vj5t_hpxHmibIPReB7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/MS8wNC8xOS80Mi9y/YXNwYmVycnktMTk1/MzAwMF82NDAuanBn", min: 150, max: 300, unit: "pack" },
    { name: "Frozen Mango", image: "https://imgs.search.brave.com/Zy5d2KaJkd-InXYtCakZ43s-ubeCd4lYyW3r67eE9Z0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF2TFotblZHM0wu/anBn", min: 120, max: 250, unit: "pack" },
    { name: "Frozen Pizza Dough", image: "https://imgs.search.brave.com/ml6rTf_pqfu2tRFixyt4nVXbdI1Evm-AG3dPiFNZ0OY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZ2FydGh1cmJh/a2luZy5jb20vc2l0/ZXMvZGVmYXVsdC9m/aWxlcy9zdHlsZXMv/c2NhbGVkX3NtYWxs/L3B1YmxpYy8yMDI0/LTAzL0Nhbi15b3Ut/ZnJlZXplLXBpenph/LWRvdWdoLTdfMC5q/cGc_aXRvaz1TWXVo/eXEzRg", min: 50, max: 120, unit: "pack" },
    { name: "Frozen Paratha", image: "https://imgs.search.brave.com/1Ok8p9qcOMvCA8wyMqK_2YBmpAz0GgZQ_VChRcvVN58/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly80Lmlt/aW1nLmNvbS9kYXRh/NC9PUC9PUi9NWS0y/NDY1MjM5L2xhY2No/YS1wYXJhdGhhLTUw/MHg1MDAuanBn", min: 40, max: 100, unit: "pack" },
    { name: "Frozen Ready Meals", image: "https://imgs.search.brave.com/-x4yC1xIVvJxrQWRe_94DMzOyMDaT7hap09zGMpC5gQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb29s/LXNpbXBsZS5jb20v/Y2RuL3Nob3AvZmls/ZXMvODg2NTVfcmF2/aW9sZXNyaWNvdHRh/dG9tYXRlc3NhdWNl/Y291cmdldHRlX3Bh/Y2tfd2ViLmpwZz92/PTE3NDg1Mjc2ODIm/d2lkdGg9NDYw", min: 80, max: 200, unit: "pack" }
  ];
  
  
  frozen.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "frozen",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Convenient ${item.name.toLowerCase()}, ready to cook or eat.`,
      unit: item.unit,
      inStock: Math.random() > 0.05,
      deliveryTime: "30-45 mins",
      weightOptions: item.unit === "piece" ? [{ value: "1 piece", price: basePrice }] : [
        { value: "Small Pack", price: Math.round(basePrice * 0.5) },
        { value: "Regular Pack", price: basePrice },
        { value: "Family Pack", price: Math.round(basePrice * 2) }
      ]
    });
  });
  
  // Spices & Masala (22 products) - Realistic Indian prices
  const spices = [
    { name: "Turmeric Powder", image: "https://imgs.search.brave.com/73dqkHOcwh4TWsc4fZ6wMMBvVKp5DUPsBdFsGc-nYMQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzNm/MGQ1MzM4LTM5Yjkt/NDk2Ni05YjE5LTAy/NTU3NDBmNGI4Zi5f/X0NSMCwwLDk3MCw2/MDBfUFQwX1NYOTcw/X1YxX19fLnBuZw", min: 100, max: 250, unit: "kg" },
    { name: "Red Chili Powder", image: "https://imgs.search.brave.com/bSpU5u9j9BtcTYW1aDUcN92we_0-T5UJNYXqIRHthgE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2dyNzc3Zm9vZHMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzAyLzc3Ny1Q/cmVtaXVtLVJlZC1D/aGlsbGktUG93ZGVy/LTEwMGctMS5qcGc", min: 120, max: 300, unit: "kg" },
    { name: "Coriander Powder", image: "https://imgs.search.brave.com/o_mRM9EBX6HpXGFwJ3c2WgQ8Xrv2pWBj0-I8ob76bf8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF6TmtiTDlJR0wu/anBn", min: 100, max: 250, unit: "kg" },
    { name: "Cumin Seeds", image: "https://imgs.search.brave.com/obqeyUr0ABE9EZcQ0cjB5KkyuMgYcBAqY0gKSsOepmM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk2/NTc1MTE4L3Bob3Rv/L2N1bWluLXNlZWRz/LXRleHR1cmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVJs/VDhRc1N2VzZTT3pa/cjdWSTBrWWlGQ2FW/amZxWTV2bDZrZXlM/WTZ2c2c9", min: 150, max: 350, unit: "kg" },
    { name: "Mustard Seeds", image: "https://imgs.search.brave.com/jB3GyzKj3D8jASq0ddFtL_hpOrV468orimouVOFN6Oo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9jbG9zZS1t/dXN0YXJkLXNlZWRz/cmFpLWJyb3duLXNl/ZWRzLTI2MG53LTEw/MjkyMDY0MjUuanBn", min: 80, max: 200, unit: "kg" },
    { name: "Fenugreek Seeds", image: "https://imgs.search.brave.com/MBgFooKpY3J05k4qlFHy42bSM2fUfIqTEtUc52VY4sw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mZW51/Z3JlZWstc2VlZHMt/MjU0MDU0MjQuanBn", min: 120, max: 300, unit: "kg" },
    { name: "Fennel Seeds", image: "https://imgs.search.brave.com/e368qOuEc2HIo5D_DbYBP23UgrB49AGl7bpfzRCOKZg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzU5LzY0LzMw/LzM2MF9GXzI1OTY0/MzAwNV9sZ0hsa05h/SzdhZGlyUGxqNUV6/SlpKcU1CZTNRYnhh/RC5qcGc", min: 150, max: 350, unit: "kg" },
    { name: "Cardamom", image: "https://imgs.search.brave.com/M-exJ3CKX4MABbTS03ikYwmMbPPHf1WtjaBLojtb4z4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/NDkzOTc5MS9waG90/by9kcnktZ3JlZW4t/Y2FyZGFtb20tcG9k/cy1hcy1iYWNrZ3Jv/dW5kLWNsb3NldXAu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWlnYU5ralc4ZEdD/N2Fvd1dUWUNRMzFx/Z3c3dW9YWkt6U2tL/TTdjckJtUXM9", min: 800, max: 2000, unit: "kg" },
    { name: "Cinnamon", image: "https://imgs.search.brave.com/vVRGj6R5pWiNiarCYnThq-VKHxUKnc8laiy_7pv4EGs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bG9zZXVwLXR1cmtp/c2gtY2lubmFtb24t/ZWd5cHRpYW4tYmF6/YWFyXzEyNjgtMjAy/NDIuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw", min: 300, max: 700, unit: "kg" },
    { name: "Cloves", image: "https://imgs.search.brave.com/f7a1bfoTe3M_xGqURYLd7meW1PuzAhIytX73rTeCAYs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFHMXRKK0xDU0wu/anBn", min: 400, max: 900, unit: "kg" },
    { name: "Black Pepper", image: "https://imgs.search.brave.com/Qw0h-A0n8WnggMl7VlL3wOQaX-ajuAltnMWZKYob3tA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/MTYyMjM3Ny9waG90/by9ncm91bmQtYmxh/Y2stcGVwcGVyLWlu/LWEtd29vZGVuLWJv/d2wtYW5kLXBlcHBl/cmNvcm5zLW9uLWEt/d2hpdGUtYmFja2dy/b3VuZC1pc29sYXRl/ZC10b3Atdmlldy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/eFBxT09ZSFJzbFZ6/U1NsRkF5TGM5ZXZq/Q0ZnTFcyb0h4Z3Zt/dzh1UjFOYz0", min: 300, max: 700, unit: "kg" },
    { name: "Bay Leaves", image: "https://imgs.search.brave.com/tqbbVQ5pvEyW2YLmSzD5lcM2sQrz4utMR5T8LlUBSNA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/MDc3OTgwNi9waG90/by9mcmVzaC1vcmdh/bmljLWJheS1sZWF2/ZXMtb24tcnVzdGlj/LXdvb2Rlbi10YWJs/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZVZIY3NjLU9M/QjY4ZmdZOGxPejB2/a2taYVZwZHhaeDdH/MHZqYnVKZ2FSRT0", min: 200, max: 500, unit: "kg" },
    { name: "Nutmeg", image: "https://imgs.search.brave.com/Z9Sb8qpaxd5IP_woc5GmJ09TWhCemoy2cbLbRLp6-p0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9udXRtZWct/b24tZGFyay1iYWNr/Z3JvdW5kLWRpcmVj/dGx5LTI2MG53LTEw/NzMwOTU1MjYuanBn", min: 500, max: 1200, unit: "kg" },
    { name: "Mace", image: "https://imgs.search.brave.com/YmdChNlhQYFN48MDHKTZ2CEYSBsztsR-D3XHiwZCBHY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1Lzc2LzYyLzcx/LzM2MF9GXzE1NzY2/MjcxNjRfVUllcUdr/UEFaMmYwN0d0RUhu/bk11MVk4NUNhTXp0/QWwuanBn", min: 600, max: 1400, unit: "kg" },
    { name: "Star Anise", image: "https://imgs.search.brave.com/uVEtnBAdEU23Ml7o5K7Ou-L51oghrC1mXJWETKAiDpw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZmxhZXZv/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDIvV2hh/dGlzU3RhckFuaXNl/LmpwZz9yZXNpemU9/MTIwMCw3NzMmc3Ns/PTE", min: 400, max: 900, unit: "kg" },
    { name: "Curry Powder", image: "https://imgs.search.brave.com/CeoztnUJKBkgCnFzuNwiv3IQEGPYfluniGdasK8LQKw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmFjaGVsY29va3Mu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAzL0hvbWVt/YWRlLUN1cnJ5LVBv/d2Rlci1waW4tMS5q/cGc", min: 150, max: 350, unit: "kg" },
    { name: "Garam Masala", image: "https://imgs.search.brave.com/5STLku4dsG867iaEO5iK2_pjCDei7YxuzklX6_YxLiU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYXRj/aGZvb2RzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/Ny9DYXRjaC1TcGlj/ZXMtR2FyYW0tTWFz/YWxhLndlYnA", min: 200, max: 500, unit: "kg" },
    { name: "Kitchen King Masala", image: "https://imgs.search.brave.com/8IQwYkUr5OTs0UeZY6LGeeSePqz1vJ1ISn67PY3Kl0c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzlj/YWYwMjU4LWU2NjYt/NGIxMC04YjA1LTY2/MmJjM2JmMzQ5MS5f/X0NSMCwwLDI1MDAs/MjUwMF9QVDBfU1gz/MDBfVjFfX18ucG5n", min: 100, max: 250, unit: "pack" },
    { name: "Chicken Masala", image: "https://imgs.search.brave.com/lWFAKSnk7fcepWpPP2ZQvf58Trm018Xa7X5421yh1wU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2RzbWFzYWxhLmNv/bS9jZG4vc2hvcC9m/aWxlcy8yMC53ZWJw/P3Y9MTc2MDUxNzIx/NSZ3aWR0aD0xOTQ2", min: 80, max: 200, unit: "pack" },
    { name: "Biryani Masala", image: "https://imgs.search.brave.com/nSL9e_Mje7mZI5IYfImuCj70NmL2-NvaW3F37gwYlAY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/LmNvb2ttZS5pbi9h/c3NldHMvdXBsb2Fk/cy9tZWRpYS11cGxv/YWRlci9oYW5kaS1i/aXJpeWFuaS1tYXNh/bGExNjQ5OTMyMTg1/LndlYnA", min: 90, max: 220, unit: "pack" },
    { name: "Sambar Powder", image: "https://imgs.search.brave.com/OWGrEe9NfwD4-ozZSkHx6f5zcBgTWM8LsG7ZqM9kzLE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzQxNi80MTYva3No/dHh1ODAvc3BpY2Ut/bWFzYWxhL3Avay9u/L3NhbWJhci1wb3dk/ZXItcG91Y2gtbXRy/LXBvd2Rlci1vcmln/aW5hbC1pbWFnNmZ0/dno3eGc2ZWdnLmpw/ZWc_cT03MCZjcm9w/PWZhbHNl", min: 70, max: 180, unit: "pack" },
    { name: "Rasam Powder", image: "https://imgs.search.brave.com/UBqUEs3_fYR_B1eQEcDoUf0WURLbCZ41rMnxcUo2Fgk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXJp/dXNhLmNvbS9jZG4v/c2hvcC9maWxlcy84/MzAzNl9SYXNhbVBv/d2Rlci0xMDBHbXNf/NF83MDB4NzAwLndl/YnA_dj0xNzIzNzk0/ODE1", min: 60, max: 150, unit: "pack" }
  ];
  
  spices.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "spices",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Aromatic ${item.name.toLowerCase()}, essential for Indian cooking.`,
      unit: item.unit,
      inStock: Math.random() > 0.02,
      deliveryTime: "30-45 mins",
      weightOptions: item.unit === "kg" ? generateWeightOptions(basePrice, "kg") : [
        { value: "50g", price: Math.round(basePrice * 0.05) },
        { value: "100g", price: Math.round(basePrice * 0.1) },
        { value: "200g", price: Math.round(basePrice * 0.2) }
      ]
    });
  });
  
  // Cooking Essentials (25 products) - Realistic Indian prices
  const cooking = [
    { name: "Refined Oil", image: "https://imgs.search.brave.com/cVTiwEP_gI5cQXAmsEW-tXnJIo--NgrbflKFE6sgd60/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/emVwdG9ub3cuY29t/L3Byb2R1Y3Rpb24v/dHI6dy00MDMsYXIt/OTU0LTk1NCxwci10/cnVlLGYtYXV0byxx/LTQwLGRwci0yL2Nt/cy9wcm9kdWN0X3Zh/cmlhbnQvZGU0ODFi/MjAtNzA0Zi00ODI5/LWE1ZDUtZWM4YjBm/ZGI3OGExLmpwZWc", min: 120, max: 200, unit: "litre" },
    { name: "Mustard Oil", image: "https://imgs.search.brave.com/h-YIP68HsSWRfW_egzrk00_jeNNNtBRwjrxtItW2waE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5Lzg5LzgxLzU4/LzM2MF9GXzk4OTgx/NTg5N19leXV1c2Qx/b3E3ZkM3cGlOUk1n/Q25lV3l0UGN4SFJy/eS5qcGc", min: 150, max: 250, unit: "litre" },
    { name: "Olive Oil", image: "https://imgs.search.brave.com/1zNIAPTPGcDrbh5OO2gVWX2OZNXuuBTN_lqbwYrRdMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/eW91dHViZS5jb20v/dmkvZWZ3eHVHY1RN/b3MvaHFkZWZhdWx0/LmpwZw", min: 300, max: 600, unit: "litre" },
    { name: "Coconut Oil", image: "https://imgs.search.brave.com/mBVQovp7zqSC7c8gWVMdhp1fgGznDMrEMfoObrlplOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODYy/NDIyNTE0L3Bob3Rv/L2NvY29udXQtYW5k/LW9pbC1vbi1hLXdv/b2Rlbi1iYWNrZ3Jv/dW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1oR011cmxD/bl9YZnNoaUc2dF9Y/THFvQ2F6TFpZUTBk/LU16Zkg3Q0RkSHdV/PQ", min: 200, max: 400, unit: "litre" },
    { name: "Ghee", image: "https://imgs.search.brave.com/hZD7xzQG9CFjIWEWq3YeQK8n4EmWOL--kbRgmXpYMh8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEzLzE1LzE5LzQz/LzM2MF9GXzEzMTUx/OTQzNzdfUm84YzV0/ak1YWWMzb0VYVUo2/emd5ZUlFTkRrZFF5/SlguanBn", min: 400, max: 800, unit: "kg" },
    { name: "Butter", image: "https://imgs.search.brave.com/xfIiOaHFihA-aA5w9f9546AWFHf9IBn3spfmPxhwBgw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ3/MjA1NzgxL3Bob3Rv/L2Nsb3NlLXVwLW9m/LWJ1dHRlci1jdXJs/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1vYmg3M1hpS05F/bV9SOGwySE5fYzVX/VTdMcUVRSFZkd294/QUgzbkRHVFlBPQ", min: 50, max: 100, unit: "pack" },
    { name: "Sugar", image: "https://imgs.search.brave.com/2cqxD-dGsxaHEucYKMsGYXHV6RUmQD84O1tV3gwTN-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjQz/MjcxNzY0L3Bob3Rv/L3N1Z2FyLWluLWEt/YmFnLWFuZC1zcG9v/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9VTRkOHZ0bWMz/aEFITG5ZSDhGVGRT/Q2xSOF8tQkNFNlZj/Z0lmN1o2X3Atbz0", min: 40, max: 80, unit: "kg" },
    { name: "Jaggery", image: "https://imgs.search.brave.com/mUMkKO-v3ckWP1DCyjaC3M18YJ6wqllt74m5ThnY7Q8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNS8w/MS8wNS8xNS81NC9h/aS1nZW5lcmF0ZWQt/OTMxMjcwM182NDAu/anBn", min: 60, max: 120, unit: "kg" },
    { name: "Salt", image: "https://imgs.search.brave.com/t_ri0W0eaV6QNtoDve5Grtgo2cSCvC6F8NyujPe7R64/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/b3Atdmlldy1zYWx0/LWdsYXNzLWJvd2xz/LXdvb2Rlbi1zcG9v/bi13aXRoLWhpbWFs/YXlhbi1zYWx0XzE3/NjQ3NC0xODIzLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA", min: 20, max: 40, unit: "kg" },
    { name: "Rock Salt", image: "https://imgs.search.brave.com/Fa1Zj1PKaV7tAJCPqpMlhUFkBYuNzAXHfXG_aILxijg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNDQz/NTYxMDgyL3N0b2Nr/LXBob3RvLXBpbmst/cm9jay1zYWx0LXBp/bmstYm93bC13aGl0/ZS1iYWNrZ3JvdW5k/LWhpbWFsYXlhbi1z/YWx0LWJvd2w", min: 30, max: 60, unit: "kg" },
    { name: "Black Salt", image: "https://imgs.search.brave.com/cAU_x63rZZ1yh3OznWSCHjnYvCn7guWJsKWN5QuJo2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDc0/NzUyNzAwL3Bob3Rv/L2hhd2FpaWFuLWJs/YWNrLXZvbGNhbmlj/LXNhbHQtaW4tYS13/b29kZW4tYm93bC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bkNkT09hNmw1Q0E2/bnFLX3AxUWlYM1ct/UzdweVZmRjhrb2Yt/S21zcWRRWT0", min: 40, max: 80, unit: "kg" },
    { name: "Flour", image: "https://imgs.search.brave.com/RpzxWjmDj4DD-MPjI3D7Wif5F6M1XwEaVQiDQe6wk78/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9zcGVs/dC13aG9sZS1ncmFp/bi1mbG91ci13aGl0/ZS1jZXJhbWljLWJv/d2wtaXNvbGF0ZWQt/d2hpdGUtc3BpbGxl/ZC13aW50ZXItd2hl/YXQta2VybmVscy05/NTczNDg4NS5qcGc", min: 30, max: 60, unit: "kg" },
    { name: "Rice Flour", image: "https://imgs.search.brave.com/r5-E0984-MpVPawY4IYx3d_Sr6WUMy3bF3gJnnnB3Jo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mb29k/YWwuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA2L1do/aXRlLWFuZC1Td2Vl/dC1SaWNlLUZsb3Vy/LVBpbi5qcGc", min: 40, max: 80, unit: "kg" },
    { name: "Besan", image: "https://imgs.search.brave.com/HJyR849VCK7B6dlGjFyuQCBoiWPdp-zrs8renT5AuNE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9iZXNhbi1ncmFt/LWZsb3VyLWNoaWNr/cGVhLWZsb3VyLWlz/LXBvd2Rlci1tYWRl/LWZyb20tZ3JvdW5k/LWNoaWNrcGVhLWtu/b3duLWFzLWJlbmdh/bC1ncmFtXzQ2NjY4/OS04OTkyNi5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw", min: 50, max: 100, unit: "kg" },
    { name: "Semolina", image: "https://imgs.search.brave.com/1-fGp6haC7M_obtfz8Ymdi6VL65zF9-Pm890lkrLrkw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NTcyMzQ1Ny9waG90/by9yYXctb3JnYW5p/Yy1mcmVuY2gtY291/c2NvdXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVlUaXRt/aXVRRV9XalgweXNy/dEJYRjRaVGxmdF9Y/WjBSVHl1WndHOXNF/OU09", min: 40, max: 80, unit: "kg" },
    { name: "Vermicelli", image: "https://imgs.search.brave.com/hg9T-MWzTKux014NWtGUsFgldkepoTqfVcgQlFcEIcU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90aGFp/LXJpY2UtdmVybWlj/ZWxsaS13ZWF2aW5n/LW1hdC00MDY2MDk5/NC5qcGc", min: 60, max: 120, unit: "kg" },
    { name: "Pasta", image: "https://imgs.search.brave.com/uDuzQIVjUENWkCCBD4-C54I8nr0NsDQZb2FLDe-ESCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/YXN0YS13aXRoLXRv/bWF0by1zYXVjZS1z/ZXJ2ZWQtcGFuXzEy/MjAtNzU0OC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQwJnE9/ODA", min: 50, max: 100, unit: "pack" },
    { name: "Noodles", image: "https://imgs.search.brave.com/FD7LTpje3M_zEUVV31RwZjx5f5IJlSasCetuGlosEco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ib3ds/LWNoaW5lc2Utbm9v/ZGxlcy12ZWdldGFi/bGVzLXdoaXRlLWJh/Y2tncm91bmQtMzA0/NDAzNDguanBn", min: 40, max: 80, unit: "pack" },
    { name: "Rice", image: "https://imgs.search.brave.com/r-JjBQrUKZQyMi_FFWvA466cEDtPI63Y0T3KRU-jRwg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/cm9udC12aWV3LXJh/dy1yaWNlLWluc2lk/ZS1wbGF0ZV8xNzk2/NjYtMjU2MDcuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw", min: 50, max: 100, unit: "kg" },
    { name: "Basmati Rice", image: "https://imgs.search.brave.com/W-pF9KsnEJFHxZscK13TqLgRZ0ecgTdjzoqo3AF3UT4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU1/MzkyODY5L3Bob3Rv/L2Jyb3duLXJpY2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWZuSDdhZUVRZlNZ/UThVSTVmLXJOQ2Iy/Sm5mOHZZV1lQa2ZT/aUxBMlJnNjA9", min: 80, max: 160, unit: "kg" },
    { name: "Brown Rice", image: "https://imgs.search.brave.com/XUKPH-f1BwPepYjIshQQfDGys3JF3gFQp7yOq9YyZ3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzY1LzgxLzM1/LzM2MF9GXzk2NTgx/MzU2MV9RSEZpellu/Um9IWmxTWTNMcWFN/c1NGN3lvNHIxUjVG/Zy5qcGc", min: 100, max: 200, unit: "kg" },
    { name: "Lentils", image: "https://imgs.search.brave.com/sGZ9bJ-SDpCKU_9kQ4HV1Wjc3C0B2NQ73soadDtBChQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYm9uYXBwZXRp/dC5jb20vcGhvdG9z/LzU3YWNjZDIwMWIz/MzQwNDQxNDk3NTFk/Mi9tYXN0ZXIvd18x/NjAwLGNfbGltaXQv/Q09ORkVUVEktTEVO/VElMUy0xLW9mLTEy/LmpwZw", min: 70, max: 140, unit: "kg" },
    { name: "Chickpeas", image: "https://imgs.search.brave.com/YJZ3T3WiAR26m4MVlBUQLDiwKyvjeZF9U8-IyMQJaiM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzA4Lzk3Lzkw/LzM2MF9GXzEzMDg5/NzkwMDVfbFVncDNT/VXNPSGY0bHE3eE9P/eFpWbFlmVzJWZGh0/c1kuanBn", min: 80, max: 160, unit: "kg" },
    { name: "Kidney Beans", image: "https://imgs.search.brave.com/tEPyjqhFr5HeiD_WsmwQXmdPRCtEjEJn_iT18wlQyqk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDIv/MjY1LzE3OS9zbWFs/bC9yZWQta2lkbmV5/LWJlYW5zLWZyZWUt/cGhvdG8uanBn", min: 90, max: 180, unit: "kg" },
    { name: "Black Beans", image: "https://imgs.search.brave.com/RP_SZD5vnyLx6rzTJgEqfSzTiT34aFcN6yzMSZRvqLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vcGhvdG9kZWUv/cGhvdG9kZWUxNTEx/L3Bob3RvZGVlMTUx/MTAwMzE1LzQ3NzE4/OTYxLWJsYWNrLWJl/YW5zLmpwZz92ZXI9/Ng", min: 100, max: 200, unit: "kg" }
  ];
  
  cooking.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "cooking",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Essential ${item.name.toLowerCase()} for your kitchen.`,
      unit: item.unit,
      inStock: Math.random() > 0.02,
      deliveryTime: "30-45 mins",
      weightOptions: generateWeightOptions(basePrice, item.unit === "pack" ? "pack" : item.unit, item.name)
    });
  });
  
  // Breakfast Cereals (15 products) - Realistic Indian prices
  const breakfast = [
    { name: "Corn Flakes", image: "https://imgs.search.brave.com/bUCauIT3n39Eku0h7Hjp8XIxKiJGO8wYSbskS2tlJ_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzU3LzUxLzcy/LzM2MF9GXzg1NzUx/NzIzOF9IMUh6Mmlh/YWlnaUpPWWV5N3dM/cTF0UW5KcWVMMEhY/Zi5qcGc", min: 150, max: 300, unit: "pack" },
    { name: "Wheat Flakes", image: "https://imgs.search.brave.com/gpZFKSEm1QexcehOkA9UI-ZIX5Omf8UyD0IcmO0iPT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3JncGljay5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvV2hlYXRf/Rmxha2VzLmpwZz92/PTE1Njk1NzgyMjM", min: 140, max: 280, unit: "pack" },
    { name: "Muesli", image: "https://imgs.search.brave.com/hQ3tR52I0MWtl-4v3NYLozoB2VKbMZ4OdtJyZWP_MOY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzI2LzMzLzk5/LzM2MF9GXzE2MjYz/Mzk5OTlfNDhiWmpP/RzVLMFpadUtRdmFq/U1VHYjBYWVpHb3NX/NWguanBn", min: 200, max: 400, unit: "pack" },
    { name: "Oats", image: "https://imgs.search.brave.com/3xN0IKM0UYiybm1R1co7rIm7pfWXhYjX2A5l3lpDizY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGluZXNoZmxvdXJt/aWxscy5jb20vY2Ru/L3Nob3AvZmlsZXMv/T2F0c18xLnBuZz92/PTE3NTcxMzk0Nzg", min: 100, max: 200, unit: "pack" },
    { name: "Granola", image: "https://imgs.search.brave.com/CzlUDJAZcaEmvdUeQYCG1L6hyIh0VRoQMSkBJnvlLpU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTUv/NjgxLzQxNS9zbWFs/bC9ob21lbWFkZS1n/cmFub2xhLWluLWEt/Z2xhc3MtamFyLXBo/b3RvLmpwZw", min: 180, max: 350, unit: "pack" },
    { name: "Porridge", image: "https://imgs.search.brave.com/VYd8OWvOqNnE3QXki-6nOicJSVT8x8Dgkv3DxGaT10M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9t/aWxsZXQtY29uZ2Vl/LXBvcnJpZGdlLXJl/YWR5LXNlcnZlXzEx/NTAtMzgyMTkuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw", min: 120, max: 250, unit: "pack" },
    { name: "Breakfast Cereal", image: "https://imgs.search.brave.com/9vmC2gE7xVYyZLzZgGMb90dra3V4aGSj0RSk3_m_AWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/MzIzLzIzOS9zbWFs/bC9taWxrLXBvdXJp/bmctaW50by1ib3ds/LW9mLWNvbG9yZnVs/LWJyZWFrZmFzdC1j/ZXJlYWxzLXdpdGgt/YWxwaGFiZXQtc2hh/cGVzLW9uLWJsdWUt/YmFja2dyb3VuZC1m/cmVlLXBob3RvLmpw/Zw", min: 160, max: 320, unit: "pack" },
    { name: "Chocos", image: "https://imgs.search.brave.com/3fp8cdhA7nXyZDz3jrj9zflOOxHM_06dJWha424hS1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sc21l/ZGlhLmxpbmtlci1j/ZG4ubmV0LzEvMjAy/MC80MTQ5MzM2Lmpw/Zz9kPTM5MHgzOTA", min: 130, max: 260, unit: "pack" },
    { name: "Malt-o-Meal", image: "https://imgs.search.brave.com/AluMuwHMX3Y47_aSUInUjN86sPBhrUr6oJsePtgMEZs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxUUZBcXZVeHVM/LmpwZw", min: 110, max: 220, unit: "pack" },
    { name: "Weetabix", image: "https://imgs.search.brave.com/aUV_m57u-iLywG7fVslACqWqqzt2j1cp6ayPvO-SJpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZXRy/by5jby51ay93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOS9T/RUlfMjIxMjQwNzMy/LTg0OTYuanBnP3F1/YWxpdHk9OTAmc3Ry/aXA9YWxsJnc9NjQ2", min: 180, max: 360, unit: "pack" },
    { name: "Special K", image: "https://imgs.search.brave.com/3qzxGwl8Q2iS-F7iJXvXoJL07uOxrPihTB_7q83t_ok/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFsTFM0cGV0R0wu/anBn", min: 170, max: 340, unit: "pack" },
    { name: "Cheerios", image: "https://imgs.search.brave.com/Zjs4SYgVuCrYtjvT-i-NHXP_QJcBc2JF8BEVukwg7Bw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dW5jbGV0b2J5cy5j/b20uYXUvc2l0ZXMv/ZGVmYXVsdC9maWxl/cy8yMDI1LTA0L3B1/cnBsZS5wbmc", min: 190, max: 380, unit: "pack" },
    { name: "Froot Loops", image: "https://imgs.search.brave.com/guBLe_Rvm9oKmduv7gsG8HZ8eP6JxxPCEFkOVLrUiYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTErcWNvV0V4VEwu/anBn", min: 200, max: 400, unit: "pack" },
    { name: "Cocoa Puffs", image: "https://imgs.search.brave.com/mdH9JvKbZKaLAKT5W0eMwhpA4w5iiScL_6XbluRvu8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb2pv/LmdlbmVyYWxtaWxs/cy5jb20vYXBpL3B1/YmxpYy9jb250ZW50/L09CSHhKeE1UU2Vt/Z2V3SUdlYkJHZmdf/Z21pX2hpX3Jlc19q/cGVnLmpwZWc_dj05/ZDU0YWQzNSZ0PWJj/MGNlYzFmZDRiYzRj/MzViOTY3ZGY5NWFm/OGMxZmNj", min: 180, max: 360, unit: "pack" },
    { name: "Rice Krispies", image: "https://imgs.search.brave.com/_6x2sSaum9S5qxAsFefANokCRFW01KUkoJyCwp-8X3w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uYXRh/c2hhc2tpdGNoZW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzEyL1JpY2Ut/S3Jpc3BpZS1UcmVh/dHMtNi5qcGc", min: 160, max: 320, unit: "pack" }
  ];
  
  breakfast.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "breakfast",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Healthy ${item.name.toLowerCase()} for a perfect breakfast.`,
      unit: item.unit,
      inStock: Math.random() > 0.05,
      deliveryTime: "30-45 mins",
      weightOptions: [
        { value: "250g", price: Math.round(basePrice * 0.5) },
        { value: "500g", price: basePrice },
        { value: "1kg", price: Math.round(basePrice * 2) }
      ]
    });
  });
  
  // Personal Care (20 products) - Realistic Indian prices
  const personalCare = [
    { name: "Shampoo", image: "https://imgs.search.brave.com/Bhpw5aRN6fO87NfUVdNXegt9B4n64igCDuqBykS1NlI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2hhZGluYXR1cmFs/LmNvbS9jZG4vc2hv/cC9maWxlcy9CZW5l/Zml0c184MDhlNjhj/NC04OWIwLTRlZTgt/OGRlZS1iYWUzZDg5/ZjNlYzkuanBnP3Y9/MTc2NTUyNTIxOCZ3/aWR0aD0xMjgw", min: 100, max: 300, unit: "bottle" },
    { name: "Conditioner", image: "https://imgs.search.brave.com/5oP9taGBpw-IaSC2fnmDNXEfvbMJAL5cLJWlkyESBXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGlyYWJlYXV0eS5j/b20vdjIvYmlsbG93/aW5nLXNub3dmbGFr/ZS00MzQyMzQvdGly/YS1wL3dya3IvcHJv/ZHVjdHMvcGljdHVy/ZXMvaXRlbS9mcmVl/L29yaWdpbmFsLzk0/NTM2OS9KdWZ5OEhM/VkpaLTk0NTM2OV8x/LmpwZw", min: 120, max: 350, unit: "bottle" },
    { name: "Body Wash", image: "https://imgs.search.brave.com/Vzn36QxhSKD5Cyx4B95tvI8IMTLEfnHiQB0FiiW9LBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvYm9keS13YXNo/L2wvOC9nLzI1MC0x/LXNhbGljeWxpYy1h/Y2lkLWV4Zm9saWF0/aW5nLWJvZHktd2Fz/aC1wcmV2ZW50cy1i/YWNrLWJvZHktb3Jp/Z2luYWwtaW1haGV5/Y2JrY3V4eGU0OS5q/cGVnP3E9NzA", min: 80, max: 250, unit: "bottle" },
    { name: "Hand Wash", image: "https://imgs.search.brave.com/j6K2yCSCBFEK9mv9VBicp7VUmr4ShDbK9dCfhKowfSE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/emVkYmxhY2suY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL2hhbmQt/d2FzaC1iYW5uZXJf/Mi5qcGc_dj0xNjIz/NDkzODAx", min: 50, max: 150, unit: "bottle" },
    { name: "Face Wash", image: "https://imgs.search.brave.com/STo4DehNW01I2lWznoSPYjL8saF5jNJrOWMCQYOHTz4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMwMC8zMDAveGlm/MHEvZmFjZS13YXNo/L2IveC90Ly1vcmln/aW5hbC1pbWFoMzJq/Z2NidmtnYXE0Lmpw/ZWc_cT05MA", min: 70, max: 200, unit: "tube" },
    { name: "Moisturizer", image: "https://imgs.search.brave.com/IhtMyT5-UKY0uyTgSEfhj3hGyNp4LDAcOfZnGpVz2D8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVt/Z29vZG5lc3MuY29t/L2Nkbi9zaG9wL2Zp/bGVzLzAxX2ZiNTMz/YzE2LThmZDQtNDA5/MS04OTZlLTlkNjFi/YzYxYTlhNy5qcGc_/dj0xNzY3MzUxMjA1/JndpZHRoPTQ2MA", min: 100, max: 300, unit: "bottle" },
    { name: "Sunscreen", image: "https://imgs.search.brave.com/4mc4txuNnr7cUCLzJ3Tgq5P0GE89vxi91p-mGEkD5Eo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAy/NTAvOTY2MS84MDM4/L2ZpbGVzL0xQNWUu/anBnP3Y9MTcxMjk0/ODgwOQ", min: 150, max: 400, unit: "tube" },
    { name: "Toothpaste", image: "https://imgs.search.brave.com/QqjbETetL1_0p1ZmlKEBCTxhtMP6Ar-0f1MbHI_5eXI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/ZnJlc2gtdG9vdGhw/YXN0ZS1hZHZlcnRp/c2VtZW50LXJlYWxp/c3RpYy1zdHlsZV81/MjY4My0xNjY5NS5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA", min: 40, max: 120, unit: "tube" },
    { name: "Toothbrush", image: "https://imgs.search.brave.com/qT7H1vm9PZ6oa8sNhaM-JYitP51kKWios6vBb_5QADY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/MS8wMi8wMC80MC90/b290aC1icnVzaGVz/LTExMTcyNjZfNjQw/LmpwZw", min: 30, max: 100, unit: "piece" },
    { name: "Mouthwash", image: "https://imgs.search.brave.com/Scg9FsrLS6qrRZMgCqp92EhvCD39HfVIry1nCWfQpKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvM2QtaWxs/dXN0cmF0aW9uLW1v/dXRod2FzaC1hZC10/ZW1wbGF0ZS0yNjBu/dy0xNzE3MDc4MDU0/LmpwZw", min: 80, max: 200, unit: "bottle" },
    { name: "Deodorant", image: "https://imgs.search.brave.com/oh2SbB2GgIHhPWgOhZMGU1AAWRMwXxFdU7QXT2De2cY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNzQx/NzA0Mjg4LW1obC1k/ZW9kb3JhbnQtb2Fy/cy1hbHBzLTY0OC02/N2QwNGM1MzMzM2Zl/LmpwZz9jcm9wPTAu/OTA0eHc6MC45MDR4/aDswLjA0MzN4dyww/LjA5NjJ4aCZyZXNp/emU9OTgwOio", min: 60, max: 180, unit: "can" },
    { name: "Perfume", image: "https://imgs.search.brave.com/ujN0j0taklg_uQPsnueIGBYwKhx5JXz-vOnQ7OIvREk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzEv/NDQ1Lzk1OC9zbWFs/bC90aHJlZS1wZXJm/dW1lLWJvdHRsZXMt/d2l0aC1mbG93ZXJz/LW9uLWEtdGFibGUt/cGhvdG8uanBlZw", min: 300, max: 800, unit: "bottle" },
    { name: "Shaving Cream", image: "https://imgs.search.brave.com/Ti0iRr9nF0H8JbJouOQcPpTZ4dOg4WOhs2ZuevdFceo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9BTkRST0lEL0Rl/ZmF1bHQvMjAyMy82/LzMxNDQ4NTgxMi9B/US9TRC9YVi8yMjgz/NDQwMy9wcm9kdWN0/LWpwZWctMjUweDI1/MC5qcGc", min: 50, max: 150, unit: "can" },
    { name: "Razor", image: "https://imgs.search.brave.com/4cKfYc4Amf3DJ3oXD-DrSlaGna_5mBZ5GTJa3rT-XXM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FiL1Bhcmtlci03/NlJfU2FmZXR5X1Jh/em9yLmpwZw", min: 40, max: 120, unit: "pack" },
    { name: "Sanitary Pads", image: "https://imgs.search.brave.com/_7eY9pL3L2lcCJregkw4Jql5Vei5L157mLtRIRELs1o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvc2FuaXRhcnkt/cGFkLXBhbnR5bGlu/ZXIveC8xL2IvdWx0/cmEtdGhpbi0xMi1o/b3VyLXByb3RlY3Rp/b24tbGVhay1wcm9v/Zi1zaXplLXhsLWNv/bWJvLXNhbml0YXJ5/LW9yaWdpbmFsLWlt/YWhmdXJncWtyNmtz/dTQuanBlZz9xPTcw", min: 60, max: 180, unit: "pack" },
    { name: "Tampons", image: "https://imgs.search.brave.com/_N8EKHAZoa4KIjanyfwW1aI6nRSXCT3L4BmhTQ0obmM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvdGFtcG9uL2Mv/dC82L3JlZ3VsYXIt/MjAtZmxvaC1vcmln/aW5hbC1pbWFoZnNn/Z2V6YmN4bXVtLmpw/ZWc_cT03MA", min: 80, max: 200, unit: "pack" },
    { name: "Hand Sanitizer", image: "https://imgs.search.brave.com/ChsUMyEjLabd0yjiLqT5Uaip-rCF0OwG_8u69mWDGOs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9oYW5k/LXNhbml0aXplci1t/YXNrLWdlbC1jb3Jv/bmEtdmlydXMtcHJl/dmVudGlvbi1wcm90/ZWN0aW9uLTE3ODg5/MDc2Mi5qcGc", min: 30, max: 100, unit: "bottle" },
    { name: "Body Lotion", image: "https://imgs.search.brave.com/0rLEyYm_u9lpMNHUy_RzLKw8wTV-92i80imIeyq4s2w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWNhZmZlaW5lLmNv/bS9jZG4vc2hvcC9m/aWxlcy9jYXJkXzFh/LmpwZz92PTE3NjU3/NzkxNjgmd2lkdGg9/NTMz", min: 120, max: 300, unit: "bottle" },
    { name: "Face Cream", image: "https://imgs.search.brave.com/0rmfW6g4gNkcAedjj__Ik7IeYglk2VGVPNIPFDKg1K8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDcv/MDExLzA0MS9zbWFs/bC9sdXh1cnktZmFj/ZS1jcmVhbS1qYXIt/b24tYS1kYXJrLWJs/dWUtc2lsay1waG90/by5qcGc", min: 150, max: 400, unit: "jar" },
    { name: "Lip Balm", image: "https://imgs.search.brave.com/iO7YFKfMd0-DvLGE2nlkwwKwFVP9-VdUdA597FEuWFU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMwMC8zMDAveGlm/MHEvbGlwLWJhbG0v/OC9yL2wvLW9yaWdp/bmFsLWltYWhoY2Jo/bXBkcWd4ZmcuanBl/Zz9xPTkw", min: 40, max: 120, unit: "tube" }
  ];
  
  personalCare.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "personal-care",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Quality ${item.name.toLowerCase()} for personal hygiene.`,
      unit: item.unit,
      inStock: Math.random() > 0.05,
      deliveryTime: "30-45 mins",
      weightOptions: [
        { value: "50ml/g", price: Math.round(basePrice * 0.3) },
        { value: "100ml/g", price: Math.round(basePrice * 0.6) },
        { value: "200ml/g", price: basePrice }
      ]
    });
  });
  
  // Cleaning Supplies (18 products) - Realistic Indian prices
  const cleaning = [
    { name: "Dish Soap", image: "https://imgs.search.brave.com/_kEOCcUg4XEiSqs1mHqaEOBXhE19zkMxZgtVx-nV38A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODU1/MDEyMzEvcGhvdG8v/c29hcC1pbi1zb2Fw/LWRpc2guanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXFBQlJQ/blRLYXhTVF83a25o/MngxUzZLeUIteEdu/SENLUV9YYUtuTEx3/bGs9", min: 40, max: 100, unit: "bottle" },
    { name: "Laundry Detergent", image: "https://imgs.search.brave.com/1GJkXv5-e9JXaIC0irNnfSx0jo79biWELfVfrHm54Zs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/cmVhbGlzdGljLWxh/dW5kcnktZGV0ZXJn/ZW50LWFkLXBvc3Rl/cl8xMjg0LTI1NjM3/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA", min: 100, max: 300, unit: "pack" },
    { name: "Fabric Softener", image: "https://imgs.search.brave.com/U3HxP2caxFcV-iTorXOS7g8eQDlQABFkl0JVDFqZDGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/ODc0MTM2My92ZWN0/b3Ivc2FrdXJhLWZs/b3dlci1mYWJyaWMt/c29mdGVuZXItcHJv/bW90aW9uYWwtcG9z/dGVyLXRlbXBsYXRl/LXBpbmstcGV0YWwt/Ymxvc3NvbS1qYXBh/bmVzZS1icmFuY2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUEtYlVMMGxyN05I/dFk4SzhzS2J6UjdS/LUh4SE9wMlRDR3Ri/YWt2OXJoVWM9", min: 80, max: 200, unit: "bottle" },
    { name: "Floor Cleaner", image: "https://imgs.search.brave.com/J125rNx2kwA0v0IwrQB0fggKAkjdpIihfa_XngtF99U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/Mjk1LzQyNi9zbWFs/bC9mbG9vci1jbGVh/bmVyLWFkcy1wcm9k/dWN0LXBhY2thZ2Ut/ZGVzaWduLW9uLWEt/c3RhZ2Utd2l0aC1z/ZXZlcmFsLWVmZmlj/YWNpZXMtYW5kLWdy/ZWVuLWxlYXZlcy1p/bi0zZC1pbGx1c3Ry/YXRpb24tdmVjdG9y/LmpwZw", min: 60, max: 150, unit: "bottle" },
    { name: "Bathroom Cleaner", image: "https://imgs.search.brave.com/sWpm-3AGH8koj4mTZM7NGcadT93_1Xv27-aSeQGRKl4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvc2hvcHN5LXRv/aWxldC1jbGVhbmVy/L2QvdS82L3JlZ3Vs/YXItMjUwMC0xbC1m/bG9vci1jbGVhbmVy/LTUwMG1sLWJhdGhy/b29tLWNsZWFuZXIt/NTAwbWwtZ2xhc3Mt/b3JpZ2luYWwtaW1h/aGR5YnFkZWhhY2d6/ay5qcGVnP3E9NzA", min: 70, max: 180, unit: "bottle" },
    { name: "Glass Cleaner", image: "https://imgs.search.brave.com/MiENxDKeCd1suNExrtzi1jYA0kZHu5g1rQnYTzWhNSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly96eWF4/LmluL2Nkbi9zaG9w/L3Byb2R1Y3RzL24z/Mi5qcGc_dj0xNjc0/NTUyNjk4JndpZHRo/PTY3OQ", min: 50, max: 120, unit: "bottle" },
    { name: "Multipurpose Cleaner", image: "https://imgs.search.brave.com/HBPQPXQrZ4tTHaFT_d-XjhdUGOQTuY6bRpJ4Stqfflg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGVh/bnJlcHVibGljLmNv/LmluL2Nkbi9zaG9w/L2ZpbGVzLzExLnBu/Zz92PTE3Mjc0MzYx/NDQmd2lkdGg9MTQ0/NQ", min: 80, max: 200, unit: "bottle" },
    { name: "Disinfectant", image: "https://imgs.search.brave.com/sKsNNil8IVnBiFleLNwHLQ0DmnPPAt1k6VM-QvAAVHo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvZGlzaW5mZWN0/YW50LXNwcmF5LWFk/LXRlbXBsYXRlLXJl/YWxpc3RpYy1ib3R0/bGUtbW9ja3VwLXNl/dC13b29kZW4tdGFi/bGUtd2l0aC1zaGll/bGRfMzE3Mzk2LTEx/OTIuanBnP3NlbXQ9/YWlzX2luY29taW5n/Jnc9NzQwJnE9ODA", min: 90, max: 220, unit: "bottle" },
    { name: "Bleach", image: "https://imgs.search.brave.com/MME0gQxOHZ9xmm4SbQmm4YMnk-roFFTlSg_yEziRqBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/NjYwOTg2L3Bob3Rv/L2JvdHRsZS1vZi1i/bGVhY2guanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVZlYzA1/Mk1NamMtM1AyVnhT/RG9yX19kOTJSUmVa/OTRTUDRtbW9yNDk1/ak09", min: 40, max: 100, unit: "bottle" },
    { name: "Hand Soap", image: "https://imgs.search.brave.com/oTnrWETBSVyHY3B_9-mxN-5SYA8YyIeITAXNt4gNll8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWlzdHJhbHNvYXAu/Y29tL2Nkbi9zaG9w/L3Byb2R1Y3RzL1Jv/c2VtYXJ5QmFnZXR0/ZUhhbmRTb2FwXzM4/MHhAMnguanBnP3Y9/MTY3OTYxNDM3OQ", min: 50, max: 120, unit: "bottle" },
    { name: "Trash Bags", image: "https://imgs.search.brave.com/XAmaB9h1vwkaa2N-L6ThFmf93aFwu9aE9vmn3POMhsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGxhc3RpY3BsYWNl/LmNvbS9jZG4vc2hv/cC9maWxlcy9CMDA4/MVVBMTRRX21haW5f/aW1hZ2VfYTIuanBn/P3Y9MTc2MjUzNDk2/NiZ3aWR0aD01MzM", min: 30, max: 80, unit: "pack" },
    { name: "Paper Towels", image: "https://imgs.search.brave.com/CwsnpaU_9T4MlmgtqDMDhwgGvHle8TcGLeKPT-62YeA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9zaHV0dGVy/c3RvY2svcGhvdG9z/LzIyODgwMTU1Njkv/ZGlzcGxheV8xNTAw/L3N0b2NrLXZlY3Rv/ci10b2lsZXQtcGFw/ZXIta2l0Y2hlbi10/b3dlbHMtcm9sbHMt/cmVhbGlzdGljLWFk/dmVydGlzaW5nLWJh/Y2tncm91bmQtd2l0/aC1jb21wb3NpdGlv/bi1vZi1pbWFnZXMt/dGV4dC0yMjg4MDE1/NTY5LmpwZw", min: 40, max: 100, unit: "roll" },
    { name: "Toilet Paper", image: "https://imgs.search.brave.com/qa11phJowORhpLZNIzWAI77r37OxXa1TDkSaxdukxDM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy53/aG9naXZlc2FjcmFw/Lm9yZy9jZG4vc2hv/cC9maWxlcy8xMnBr/LmpwZz92PTE3NDQz/OTU2MzImd2lkdGg9/OTU3", min: 30, max: 80, unit: "roll" },
    { name: "Dishwasher Detergent", image: "https://imgs.search.brave.com/8X4WJJseVfGhzgp20DVGWSnLlgG5MrfLnHiSvS1jtYw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFUTHpvMmFvMkwu/anBn", min: 100, max: 250, unit: "pack" },
    { name: "Air Freshener", image: "https://imgs.search.brave.com/3iyebJPQW9nON6Ef51VpjhEpZ5koU8TzJgTuVUHECtc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubWVlc2hvLmNv/bS9pbWFnZXMvcHJv/ZHVjdHMvNTMxNTU5/MTgzL2RoaDBzXzUx/Mi53ZWJwP3dpZHRo/PTM2MA", min: 50, max: 120, unit: "can" },
    { name: "Insect Repellent", image: "https://imgs.search.brave.com/1_bz_TRvFeiM-IG_atSGeuPer5CDCcuMiEg-SgEnSu4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJhdmVsYW5kbGVp/c3VyZS5jb20vdGht/Yi9WWERNM0c0Qkhu/VkRaM1FxaFE2R2Z4/SmxEUFU9L2ZpdC1p/bi8xNTAweDI2Njcv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCkvdGFsLW5hdHJh/cGVsLXRpY2stYW5k/LWluc2VjdC1yZXBl/bGxlbnQtdGF5bG9y/LWZveC0wMy05MDUy/NzU5NDBhYmM0NDFk/YjgwYWRjZWYwZjc2/MmIyMi5qcGVn", min: 60, max: 150, unit: "spray" },
    { name: "Mop", image: "https://imgs.search.brave.com/M6iaYghbGdu0zoEfCHI23NTuQxip_wLUyiOBd4hBYEA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/OTY5LzE4OS9zbWFs/bC9hLWJ1Y2tldC1h/bmQtbW9wLW9uLWEt/d2V0LWZsb29yLWZy/ZWUtcGhvdG8uanBl/Zw", min: 200, max: 500, unit: "piece" },
    { name: "Broom", image: "https://imgs.search.brave.com/qKJQao1EiAW31OdARs3fImt0hTmdOy8Wuho_EwGQlXs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9BTkRST0lEL0Rl/ZmF1bHQvMjAyNC8x/LzM3ODYyNTk3Ni9G/QS9HTS9XVi8zNTg2/NTQyOC9wcm9kdWN0/LWpwZWctNTAweDUw/MC5qcGc", min: 150, max: 400, unit: "piece" }
  ];
  
  cleaning.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "cleaning",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Effective ${item.name.toLowerCase()} for a clean home.`,
      unit: item.unit,
      inStock: Math.random() > 0.05,
      deliveryTime: "30-45 mins",
      weightOptions: item.unit === "piece" || item.unit === "roll" ? [{ value: "1 piece", price: basePrice }] : [
        { value: "500ml", price: Math.round(basePrice * 0.5) },
        { value: "1L", price: basePrice },
        { value: "2L", price: Math.round(basePrice * 2) }
      ]
    });
  });
  
  // Pet Care (10 products) - Realistic Indian prices
  const petCare = [
    { name: "Dog Food", image: "https://imgs.search.brave.com/NiGzJ9i6_IZ2BHQKEIFoHTMyOciehIAu7hQpUTZJQZg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjc3/ODEwMjM2L3N0b2Nr/LXBob3RvLWNyb3Bw/ZWQtdmlldy13b21h/bi1ob2xkaW5nLWJv/d2wtcGV0LWZvb2Qt/YWRvcmFibGUtZ29s/ZGVuLXJldHJpZXZl/cg", min: 300, max: 800, unit: "pack" },
    { name: "Cat Food", image: "https://imgs.search.brave.com/UE0R5XUfuur7HBtPeSwLJuSrWaHID93CunD6a_EPlkM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/NTMzLzUzOS9zbWFs/bC90YWJieS1jYXQt/ZWF0aW5nLWRyeS1j/YXQtZm9vZC1mcm9t/LWEtd2hpdGUtYm93/bC1mcmVlLXBob3Rv/LmpwZWc", min: 250, max: 600, unit: "pack" },
    { name: "Bird Food", image: "https://imgs.search.brave.com/q84Ki54orwoVSPURGfQEXCJ2f7hsaAu5Ccjl8ZRWofg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF6eEVJTGItQkwu/anBn", min: 100, max: 300, unit: "pack" },
    { name: "Fish Food", image: "https://imgs.search.brave.com/LH3RcYzKcsR6o5llvH2I8bI1J05TxqSBjSZN7m8ZpIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMucGV0Y28uY29t/L3BldGNvL2ltYWdl/L3VwbG9hZC9mX2F1/dG8scV9hdXRvOmJl/c3QvZmlzaF9maXNo/LWZvb2RfY2F0ZWdv/cnktYmFubmVyX3Nh/bHR3YXRlci1mb29k/LXByb2R1Y3RzXzI2/MHgxNjMucG5n", min: 50, max: 150, unit: "pack" },
    { name: "Pet Shampoo", image: "https://imgs.search.brave.com/osBy3YAmvw17WENe1qJE3O61xPsro0ORLFa6A23zgBA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWJrZ3Jvb21pbmcu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL1BQMTIw/MV8xLmpwZz92PTE3/MzkwMDU2MTEmd2lk/dGg9MTA4MA", min: 150, max: 350, unit: "bottle" },
    { name: "Pet Toys", image: "https://imgs.search.brave.com/9nPCuaP731Bz44xs-fFDdvmbf92zsU5OolcK_IdkrMU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NDIzNTMwOS9waG90/by9wZXQtZm9vZC1p/bi1ib3dsLWFuZC1w/ZXQtdG95cy1ydWJi/ZXItYm9uZXMtZGll/dC1mb3ItZG9tZXN0/aWMtYW5pbWFscy1j/YXRzLWFuZC1kb2dz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1pM051OVFPd0Jr/M2pJa0c1RTJ5akNV/M19wWXllelRFVEhn/aE5tZnV3eWcwPQ", min: 100, max: 300, unit: "piece" },
    { name: "Pet Bed", image: "https://imgs.search.brave.com/faNZcx9cEgCTSoE_A9TGZeygG1NzK17OYm6z0W-JdZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvcGV0LWJlZC81/LzIvNy94bC1kb2ct/Y2F0LXJvdW5kLXNo/YXBlLWJlZC13aXRo/LXJlbW92YWJsZS1j/dXNoaW9uLWNvbWZv/cnRhYmxlLXhsLW9y/aWdpbmFsLWltYWg5/NWpxaHp3Z3pjMmcu/anBlZz9xPTcw", min: 500, max: 1500, unit: "piece" },
    { name: "Pet Collar", image: "https://imgs.search.brave.com/-jMTf37loUTJ3IGVlUyX_syuOtyicBCBqnQ6JAWaPtk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVudGVycGV0c3Rv/cmUuY29tL2Nkbi9z/aG9wL2ZpbGVzL0hV/TlRFUl8zNzQ3X19y/Z2IuanBnP3Y9MTcw/MDA4ODIzNyZ3aWR0/aD05MDA", min: 200, max: 500, unit: "piece" },
    { name: "Pet Leash", image: "https://imgs.search.brave.com/-pMGR0KndSfOS5VPwXzIUJjXmU9ilzQF5IeFAZuKmAk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvcGV0LWxlYXNo/LWNoYWluL3kvZS9l/L253LTUxLXJmbGNu/Zy1sZXMtY29sbHIt/YnJ3bi1mdXJyeS1j/cml0dGVycy1vcmln/aW5hbC1pbWFoM2d6/OGt0emgydjhwLmpw/ZWc_cT03MA", min: 150, max: 400, unit: "piece" },
    { name: "Litter Box", image: "https://imgs.search.brave.com/Y0h4gENKFgAoAGSJfi5DsDLKX5C1AtRQG83J2lkz5ao/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxSWhyditWaHVM/LmpwZw", min: 300, max: 800, unit: "piece" }
  ];
  
  petCare.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "pet-care",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Premium ${item.name.toLowerCase()} for your beloved pets.`,
      unit: item.unit,
      inStock: Math.random() > 0.1,
      deliveryTime: "30-45 mins",
      weightOptions: item.unit === "piece" ? [{ value: "1 piece", price: basePrice }] : [
        { value: "1kg", price: Math.round(basePrice * 0.5) },
        { value: "2kg", price: basePrice },
        { value: "5kg", price: Math.round(basePrice * 2.5) }
      ]
    });
  });
  
  // Baby Care (12 products) - Realistic Indian prices
  const babyCare = [
    { name: "Baby Diapers", image: "https://imgs.search.brave.com/iDNHp3WKijRWp8TLH75TuSAUzGkvpRcKp-ooQkO5a24/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFyclliY3Q3V0wu/anBn", min: 300, max: 800, unit: "pack" },
    { name: "Baby Wipes", image: "https://imgs.search.brave.com/R6PaJlw0Ascq2ZEwBiH6IkwXBVjQoB88Cae8M-Syxq4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhL2Jl/MzgxODEwLTM2MzIt/NDg0Zi05ZDg2LWNl/MjAyYWUxNmY4YS5f/X0NSMCwwLDk3MCw2/MDBfUFQwX1NYOTcw/X1YxX19fLmpwZw", min: 100, max: 300, unit: "pack" },
    { name: "Baby Formula", image: "https://imgs.search.brave.com/zV6qdFUty7goMKhLnUT9QIIjL1g3A5DZLYS98ssUW40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wcmVwYXJhdGlv/bi1mb3JtdWxhLWJh/YnktZmVlZGluZ2Jh/YnktaGVhbHRoLWNh/cmUtb3JnYW5pYy1t/aXh0dXJlLWRyeS1t/aWxrXzcyNDAyLTUw/MzguanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw", min: 400, max: 1000, unit: "tin" },
    { name: "Baby Food", image: "https://imgs.search.brave.com/Sbs-YQILrfd3BRTwblv4FsJjmyHQa8OZExT-oNPC5lU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9BTkRST0lEL0Rl/ZmF1bHQvMjAyMi8x/Mi9BRi9TRi9VUS8z/MjcyOTcxOC9wcm9k/dWN0LWpwZWctMjUw/eDI1MC5qcGc", min: 50, max: 150, unit: "jar" },
    { name: "Baby Cereal", image: "https://imgs.search.brave.com/d3Qj0rThuRz9AK84cluUOKLDcvNKSpuAHYdAGhPlJwU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhL2Y0/OTc0M2EzLTdlNTQt/NDY0ZS1hODE0LTNh/ZWNkNGFkOTk3MC5f/X0NSMCwwLDk3MCw2/MDBfUFQwX1NYOTcw/X1YxX19fLmpwZw", min: 200, max: 500, unit: "box" },
    { name: "Baby Shampoo", image: "https://imgs.search.brave.com/NdfjTxPwTUc5UFAHgPyM12jSV8M9T2XBvxA-NC3lswI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVp/bmRpbXVtcy5jb20v/Y2RuL3Nob3AvZmls/ZXMvMTFfYzM1MDlk/OGItMTgxMi00Mjdk/LTg2ZDgtNTYxMTky/ZWE3NDhlLndlYnA_/dj0xNzU0MzY4MTgy/JndpZHRoPTE5NDY", min: 150, max: 350, unit: "bottle" },
    { name: "Baby Lotion", image: "https://imgs.search.brave.com/6kTseY4MTxWd23NjCItG6ZFoVwpOlyALai6TPr9-bp8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaW1h/bGF5YXdlbGxuZXNz/LmluL2Nkbi9zaG9w/L3Byb2R1Y3RzL2Jh/YnktbG90aW9uLTQw/MG1sLmpwZz92PTE2/MjIwOTU3Mzc", min: 180, max: 400, unit: "bottle" },
    { name: "Baby Oil", image: "https://imgs.search.brave.com/tWGYWSbVHEQAWiJs8SQPkYy684JTaUS5RpogTFV-L28/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDI2LzEv/NTcyNzM0NDg3L05Z/L1RZL0ZYLzEzMTEw/OTc3NC9jb250YWN0/LW1hbnVmYWN0dXJp/bmctYmFieS1tYXNz/YWdlLW9pbC01MDB4/NTAwLmpwZw", min: 120, max: 300, unit: "bottle" },
    { name: "Baby Powder", image: "https://imgs.search.brave.com/pXaSkkPboTxrECzOiGQPwIw7HoVqfrFLQhYIJAU-Mvs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFieW9yZ2Fuby5j/b20vY2RuL3Nob3Av/ZmlsZXMvYmVuZWZp/dHMtb2YtZ2VudGxl/LXRhbGMtZnJlZS1i/YWJ5LXBvd2Rlci53/ZWJwP3Y9MTc0OTA0/MjY0OSZ3aWR0aD0x/MjAw", min: 100, max: 250, unit: "bottle" },
    { name: "Baby Clothes", image: "https://imgs.search.brave.com/Dlkd0MS-nJdo3ak4zOkcAncWc-EZrpRtHBKzggTiA80/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0cv/MDEvQU1BWk9OX0ZB/U0hJT04vMjAxOC9F/RElUT1JJQUwvRkFM/TDEvQkFCWS9iYWJ5/Y2xvdGhlcy5iYWJ5/cmVnaXN0cnkucG5n", min: 200, max: 600, unit: "piece" },
    { name: "Baby Bottles", image: "https://imgs.search.brave.com/U5Fk-wKI4tcNAvuieg-ys0ub7R0ElujSy3Wi7ykc8X4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9mZWVk/aW5nLWJvdHRsZXMt/Njc5NTA3Ni5qcGc", min: 150, max: 400, unit: "piece" },
    { name: "Pacifiers", image: "https://imgs.search.brave.com/9A4eeinzmxd-I28AzwigPatoQW9FS-jciWVf1hxyW9o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NzI1LzM1OC9zbWFs/bC9jbG9zZXVwLW9m/LWEtc2VsZWN0aW9u/LW9mLWJhYnktYm90/dGxlcy1hbmQtcGFj/aWZpZXJzLW9uLWEt/d2Vic2l0ZS1waG90/by5qcGc", min: 50, max: 150, unit: "pack" }
  ];
  
  babyCare.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "baby-care",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Safe and gentle ${item.name.toLowerCase()} for your baby.`,
      unit: item.unit,
      inStock: Math.random() > 0.05,
      deliveryTime: "30-45 mins",
      weightOptions: item.unit === "piece" || item.unit === "jar" || item.unit === "tin" || item.unit === "box" ? [{ value: "1 piece", price: basePrice }] : [
        { value: "Small Pack", price: Math.round(basePrice * 0.5) },
        { value: "Regular Pack", price: basePrice },
        { value: "Large Pack", price: Math.round(basePrice * 2) }
      ]
    });
  });
  
  // Organic Products (15 products) - Realistic Indian prices
  const organic = [
    { name: "Organic Rice", image: "https://imgs.search.brave.com/clzjU-y72vmrHdZxZE-Jdj5fiesYlvFHQeEEZBwaY2U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vcmdh/bmljdGF0dHZhLmNv/bS9jZG4vc2hvcC9m/aWxlcy9Ccm93bl9C/YXNtYXRpX1JpY2Vf/MWtnX1RpbGxpbmdf/NS5qcGc_dj0xNzY1/ODY1MzQ5JndpZHRo/PTE1MDA", min: 100, max: 200, unit: "kg" },
    { name: "Organic Wheat", image: "https://imgs.search.brave.com/mpsiU-pXe3KaPP3gr-J4pNvd5ylAojrOZ_Ib-9De6LA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFQSzQzUXZhcUwu/anBn", min: 80, max: 180, unit: "kg" },
    { name: "Organic Lentils", image: "https://imgs.search.brave.com/-H_dUIYoLO1mLn04__6phGZSvBQf0bvwPbEzViaprW8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWVsaXNzYXMuY29t/L2Nkbi9zaG9wL3By/b2R1Y3RzL2ltYWdl/LW9mLW9yZ2FuaWMt/c3RlYW1lZC1sZW50/aWxzLW90aGVyLTI4/NjU4MjYwMjQ2NTcy/XzYwMHg2MDAuanBn/P3Y9MTYyODA4MDk0/OA", min: 120, max: 250, unit: "kg" },
    { name: "Organic Honey", image: "https://imgs.search.brave.com/YQB_C9UaDOOZUKMbgdbtFxx7RqAPwFtAq_OGvPSt-cE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9vcmdh/bmljdGF0dHZhLmNv/bS9jZG4vc2hvcC9m/aWxlcy8xXzJfNDNi/Y2Y0YmQtNjhkNS00/MWVkLTgzNWQtMmE4/M2E2NDBlOWFmLmpw/Zz92PTE3NjE4Mjgx/MDAmd2lkdGg9MTc4/MA", min: 300, max: 700, unit: "kg" },
    { name: "Organic Tea", image: "https://imgs.search.brave.com/jNfW8yu7fed3S8rwdEgpADSgkPbCUxZ6sOvMcn2FAxQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXNzYW1pY2FhZ3Jv/LmluL2Nkbi9zaG9w/L3Byb2R1Y3RzL09y/Z2FuaWMtR3JlZW4t/VGVhLUJveF8xMDAw/eDEwMDAuanBnP3Y9/MTY3ODI1MzAwNQ", min: 200, max: 500, unit: "pack" },
    { name: "Organic Coffee", image: "https://imgs.search.brave.com/HaXk_Ljv1q76NjJ6K9cuhserCh5D-2diQaUZ1rM5YTY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZmJh/eWNvZmZlZS5jb20v/Y2RuL3Nob3AvcHJv/ZHVjdHMvb2NjLWh1/cnJpY2FuZS1lc3By/ZXNzby1kZWNhZi0y/bGItYmFnLWZyb250/LnBuZz92PTE3NDg4/Nzk2MDkmd2lkdGg9/OTAw", min: 400, max: 900, unit: "pack" },
    { name: "Organic Spices", image: "https://imgs.search.brave.com/_asICR800Eik3Dj-n7x7R5aAdU6YyVZZVF0XKnaX2nI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHVyZWluZGlhbmZv/b2RzLmNvbS9jZG4v/c2hvcC9maWxlcy9i/bGFja3NlZWRzLTIu/anBnP3Y9MTc1OTk2/MjYwNiZ3aWR0aD0z/MDA", min: 150, max: 400, unit: "pack" },
    { name: "Organic Fruits", image: "https://imgs.search.brave.com/Mq2J0A5kNnv23ozATIzozeUh5J85-MvxIBsMt6v89G4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzc5LzM3LzIw/LzM2MF9GXzE3OTM3/MjAyNF8yaXlIdHdE/NXJ3UGwzMzlKdTBE/SWs2NzZhek85VnFi/Ty5qcGc", min: 100, max: 300, unit: "kg" },
    { name: "Organic Vegetables", image: "https://imgs.search.brave.com/3GtClqMNsG2-oMgGgToKIH1Euzn9vb_6hPmE9ILc54A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NjgzLzMwMi9zbWFs/bC9mcmVzaC12ZWdl/dGFibGVzLWFuZC1m/cnVpdC1waG90by5q/cGc", min: 80, max: 250, unit: "kg" },
    { name: "Organic Milk", image: "https://imgs.search.brave.com/KKj_bgMWD4FFDkx7H23IGvvI4bf0lw-N8dyNc_aoYaM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi90aHJl/ZS1zbWFsbC1ib3R0/bGVzLW1pbGstbWVh/ZG93LWNvdy01MjYw/ODI2OC5qcGc", min: 70, max: 120, unit: "litre" },
    { name: "Organic Eggs", image: "https://imgs.search.brave.com/2ZeSTQ8u7M-vPU6r-ruRft1b6ACHKF4NTRapbI3Lfws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE4NTE0/MTQ3MDMtMTUwMmY1/ZWMxZWU2P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjEuMCZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE5Y/eDhabUZ5YlNVeU1H/Vm5aM044Wlc1OE1I/eDhNSHg4ZkRBPQ", min: 100, max: 200, unit: "dozen" },
    { name: "Organic Chicken", image: "https://imgs.search.brave.com/MNkrzLf1TrUZcAXeiioQiJmKHVD3ITULMIl4B8eNs4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9icmVhc3Qtd2lu/Z3MtbGVncy11bmNv/b2tlZC1jaGlja2Vu/LW1lYXQtbWFyaW5h/dGVkLXdpdGgtaW5n/cmVkaWVudHMtY29v/a2luZy1mcmVzaC1y/YXctY2hpY2tlbi13/aXRoLXJvc2VtYXJ5/LWxlbW9uLWhlcmJz/LXNwaWNlc183MzUy/My0zMzE4LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDA", min: 300, max: 700, unit: "kg" },
    { name: "Organic Oil", image: "https://imgs.search.brave.com/uHGrzdaYUDNFituzGGXVfKnja-iUQJs752QvxSyYx-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob3Vz/ZW9mdmVkYS5jb20v/Y2RuL3Nob3AvZmls/ZXMvU3VuZmxvd2Vy/LU9pbF8wZDNkNDcx/NC1mNWZmLTRiOWYt/YjAwNi0wMTQ1YTZl/MmM0NTUuanBnP3Y9/MTcxMzM1MTQ4MQ", min: 200, max: 500, unit: "litre" },
    { name: "Organic Sugar", image: "https://imgs.search.brave.com/Cf1cL34viuY9LtVfIkyi2MCnuYUIc_p3YceG_SwqaHY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGhhbXB1cmdyZWVu/LmNvbS9jZG4vc2hv/cC9maWxlcy9Ccm93/bl9TdWdhcl8xa2df/Ml81OTRmZDUwOS1i/YWU2LTRmNzMtODBh/NC00YzNjNmE4YzEz/MTIud2VicD92PTE3/NTAwNjk5ODAmd2lk/dGg9MTQ0NQ", min: 80, max: 180, unit: "kg" },
    { name: "Organic Flour", image: "https://imgs.search.brave.com/uv-gUwa4t43DVvdwbPDXVDz7sKjmLUtyTcvJ6g8rNtU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJ1ZXN0b3J5b3Jn/YW5pY3MuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA3/L3RydWUtc3Rvcnkt/b3JnYW5pYy1iYWpy/YS1mbG91ci1wYWNr/ZXQtYW5kLWJhanJh/LWZsb3VyLWluLWJv/d2wtMzAweDMwMC5w/bmc", min: 60, max: 140, unit: "kg" }
  ];
  
  organic.forEach(item => {
    const basePrice = randomPrice(item.min, item.max);
    
    products.push({
      id: id++,
      name: item.name,
      category: "organic",
      price: basePrice,
      discount: randomDiscount(),
      rating: randomRating(),
      reviews: randomReviews(),
      image: item.image,
      description: `Certified organic ${item.name.toLowerCase()}, chemical-free and healthy.`,
      unit: item.unit,
      inStock: Math.random() > 0.1,
      deliveryTime: "30-45 mins",
      weightOptions: generateWeightOptions(basePrice, item.unit === "pack" ? "pack" : item.unit, item.name)
    });
  });
  
  return products;
};

export const allProducts = generateProducts();
export const totalProducts = allProducts.length;

// Helper function to get products by category
export const getProductsByCategory = (category) => {
  return allProducts.filter(product => product.category === category);
};

// Helper function to get popular products
export const getPopularProducts = (limit = 12) => {
  return [...allProducts]
    .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
    .slice(0, limit);
};

// Helper function to get discounted products
export const getDiscountedProducts = (limit = 12) => {
  return [...allProducts]
    .filter(product => product.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, limit);
};

// Helper function to search products
export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};

// Helper function to get product by ID
export const getProductById = (id) => {
  return allProducts.find(product => product.id === parseInt(id));
};