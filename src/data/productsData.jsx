// src/data/productsData.js
export const categories = [
  { id: "fruits", name: "Fresh Fruits", icon: "🍎", count: 35, color: "#FF6B6B", image: "https://imgs.search.brave.com/0N7JsJXOmSC79nTBsAP1cnpEO3OdECEdr7rwtu-7q2M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kaWZmZXJlbnQt/dHlwZXMtZnJ1aXRz/XzE0NzM3Ni02MTcu/anBnP3NlbXQ9YWlz/X2h5YnJpZCZ3PTc0/MCZxPTgw" },
  { id: "vegetables", name: "Vegetables", icon: "🥬", count: 40, color: "#4CAF50", image: "https://imgs.search.brave.com/E83pDbxpOoioYUyejlJvjsW7DzPHPpATbSH_66ESM5M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDkx/ODM3OTI4L3Bob3Rv/L3ZlZ2V0YWJsZXMt/YW5kLWZydWl0cy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/VHl0S25VVzlzdXRa/RFhXOEVaUEg0VzM3/QlFWVWdjbzh4Q3JF/SzFxYlNIVT0" },
  { id: "dairy", name: "Dairy & Eggs", icon: "🥛", count: 25, color: "#FFD166", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=700&auto=format&fit=crop&q=80" },
  { id: "bakery", name: "Bakery", icon: "🥐", count: 20, color: "#06D6A0", image: "https://imgs.search.brave.com/9XQ4J6If407TlVQiXmqkqKHjp8Wjb4WrL2hTq05CzhY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjk2/Mjg5NjU2L3Bob3Rv/L3dob2xlLXdoZWF0/LWJyZWFkLW9uLXdv/b2Rlbi1wbGF0ZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/cGo1eWV3SkN5V0Jh/Y0xZWngxSVpEOF93/N2pNQTU2RnNZU3Jr/dnVTMlVDOD0" },
  { id: "beverages", name: "Beverages", icon: "🥤", count: 30, color: "#118AB2", image: "https://imgs.search.brave.com/Uwg4V7gN7DPUpoE03ou1YPbxSBpkSeoJg-8nq5IL1xk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzEv/OTc4LzMyNi9zbWFs/bC9yZWZyZXNoaW5n/LWNvbGQtY29sb3Jm/dWwtc29mdC1kcmlu/a3Mtd2l0aC1pY2Ut/YW5kLWNpdHJ1cy1w/aG90by5qcGc" },
  { id: "snacks", name: "Snacks & Chips", icon: "🍿", count: 35, color: "#EF476F", image: "https://imgs.search.brave.com/3NSNEBfI-YWFN2vvb-H15rCdKFanoYp2U4MKeODRisk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYWJvdXRhbWF6/b24uY29tL2RpbXM0/L2RlZmF1bHQvODYw/MzRhZS8yMTQ3NDgz/NjQ3L3N0cmlwL3Ry/dWUvY3JvcC8xMjgw/eDcyMCswKzAvcmVz/aXplLzEyODB4NzIw/IS9xdWFsaXR5Lzkw/Lz91cmw9aHR0cHM6/Ly9hbWF6b24tYmxv/Z3MtYnJpZ2h0c3Bv/dC5zMy5hbWF6b25h/d3MuY29tLzA1LzA5/L2NhZjQ0OWMwNDkw/Yzg2ZGFhZGZhMjFh/MzBkNDEvbXVzdC10/cnktaGVhbHRoeS1z/bmFja3MuanBn" },
  { id: "meat", name: "Meat & Poultry", icon: "🍗", count: 15, color: "#FF9A76", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=700&auto=format&fit=crop&q=80" },
  { id: "seafood", name: "Fish & Seafood", icon: "🐟", count: 12, color: "#00BCD4", image: "https://images.unsplash.com/photo-1599159340657-84d6dd7594f2?w=700&auto=format&fit=crop&q=80" },
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
    { name: "Ginger", image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&auto=format&fit=crop&q=80", min: 80, max: 200, unit: "kg" },
    { name: "Spring Onion", image: "https://static.toiimg.com/thumb/msid-117610547,width-1280,height-720,imgsize-2069095,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg", min: 15, max: 40, unit: "bunch" },
    { name: "Coriander Leaves", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8p5c5Gn2pbg19ouwkpE6-Z0jppYHDmkxbw&s", min: 5, max: 20, unit: "bunch" },
    { name: "Mint Leaves", image: "https://media.istockphoto.com/id/1164307019/photo/fresh-leaf-mint-green-herbs-ingredient.jpg?s=612x612&w=0&k=20&c=ZACUcQJgHsNYP8iUi6i4q1wUos6feXTKTq_Km4xyBR0=", min: 10, max: 30, unit: "bunch" },
    { name: "Curry Leaves", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gfnTr0S4jETpuBwsfLHIcnJ8Rt_glaze3A&s", min: 5, max: 15, unit: "bunch" },
    { name: "Fenugreek Leaves", image: "https://www.trustbasket.com/cdn/shop/articles/Methi.webp?v=1680170581", min: 10, max: 25, unit: "bunch" },
    { name: "Drumsticks", image: "https://freshggies.in/cdn/shop/files/drumstick-cut_-_FGCUTVEG38_b9a46178-cf09-4026-813d-7680b58a0857.jpg?v=1745380038", min: 40, max: 100, unit: "kg" },
    { name: "Ash Gourd", image: "https://static.sadhguru.org/d/46272/1633204872-1633204871619.jpg", min: 20, max: 50, unit: "kg" },
    { name: "Snake Gourd", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80", min: 30, max: 70, unit: "kg" },
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
    { name: "Organic Milk", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&auto=format&fit=crop&q=80", min: 50, max: 80, unit: "litre" },
    { name: "Farm Fresh Eggs", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8c?w=800&auto=format&fit=crop&q=80", min: 60, max: 120, unit: "dozen" },
    { name: "Paneer", image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=800&auto=format&fit=crop&q=80", min: 200, max: 400, unit: "kg" },
    { name: "Butter", image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=800&auto=format&fit=crop&q=80", min: 50, max: 100, unit: "pack" },
    { name: "Cheese Slice", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&auto=format&fit=crop&q=80", min: 80, max: 160, unit: "pack" },
    { name: "Mozzarella Cheese", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=80", min: 300, max: 600, unit: "kg" },
    { name: "Cheddar Cheese", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=80", min: 350, max: 700, unit: "kg" },
    { name: "Yogurt", image: "https://images.unsplash.com/photo-1576186726115-4d51596775d1?w=800&auto=format&fit=crop&q=80", min: 40, max: 80, unit: "pack" },
    { name: "Curd", image: "https://images.unsplash.com/photo-1576186726115-4d51596775d1?w=800&auto=format&fit=crop&q=80", min: 30, max: 60, unit: "pack" },
    { name: "Buttermilk", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&auto=format&fit=crop&q=80", min: 20, max: 40, unit: "litre" },
    { name: "Cream", image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=800&auto=format&fit=crop&q=80", min: 80, max: 160, unit: "pack" },
    { name: "Fresh Cream", image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=800&auto=format&fit=crop&q=80", min: 100, max: 200, unit: "pack" },
    { name: "Sour Cream", image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=800&auto=format&fit=crop&q=80", min: 90, max: 180, unit: "pack" },
    { name: "Condensed Milk", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&auto=format&fit=crop&q=80", min: 60, max: 120, unit: "tin" },
    { name: "Milk Powder", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&auto=format&fit=crop&q=80", min: 300, max: 600, unit: "kg" },
    { name: "Ghee", image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=800&auto=format&fit=crop&q=80", min: 400, max: 800, unit: "kg" },
    { name: "Ice Cream", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=80", min: 100, max: 250, unit: "tub" },
    { name: "Custard", image: "https://images.unsplash.com/photo-1576186726115-4d51596775d1?w=800&auto=format&fit=crop&q=80", min: 50, max: 100, unit: "pack" },
    { name: "Whipped Cream", image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=800&auto=format&fit=crop&q=80", min: 120, max: 240, unit: "can" },
    { name: "Cottage Cheese", image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=800&auto=format&fit=crop&q=80", min: 180, max: 350, unit: "kg" },
    { name: "Feta Cheese", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=80", min: 400, max: 800, unit: "kg" },
    { name: "Goat Cheese", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=80", min: 500, max: 1000, unit: "kg" },
    { name: "Ricotta Cheese", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=80", min: 350, max: 700, unit: "kg" },
    { name: "Khoya", image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=800&auto=format&fit=crop&q=80", min: 250, max: 500, unit: "kg" },
    { name: "Malai", image: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=800&auto=format&fit=crop&q=80", min: 80, max: 160, unit: "pack" }
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
    { name: "Whole Wheat Bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80", min: 40, max: 80, unit: "pack" },
    { name: "White Bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80", min: 30, max: 60, unit: "pack" },
    { name: "Brown Bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80", min: 45, max: 90, unit: "pack" },
    { name: "Multigrain Bread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80", min: 50, max: 100, unit: "pack" },
    { name: "Garlic Bread", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop&q=80", min: 60, max: 120, unit: "pack" },
    { name: "Bread Rolls", image: "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?w=800&auto=format&fit=crop&q=80", min: 20, max: 40, unit: "pack" },
    { name: "Bun", image: "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?w=800&auto=format&fit=crop&q=80", min: 15, max: 30, unit: "piece" },
    { name: "Croissant", image: "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?w=800&auto=format&fit=crop&q=80", min: 40, max: 80, unit: "piece" },
    { name: "Donut", image: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=800&auto=format&fit=crop&q=80", min: 30, max: 60, unit: "piece" },
    { name: "Muffin", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop&q=80", min: 40, max: 80, unit: "piece" },
    { name: "Cupcake", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop&q=80", min: 35, max: 70, unit: "piece" },
    { name: "Cookies", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop&q=80", min: 50, max: 150, unit: "pack" },
    { name: "Biscuits", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop&q=80", min: 30, max: 100, unit: "pack" },
    { name: "Cake Slice", image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "piece" },
    { name: "Pastry", image: "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?w=800&auto=format&fit=crop&q=80", min: 40, max: 80, unit: "piece" },
    { name: "Puff Pastry", image: "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?w=800&auto=format&fit=crop&q=80", min: 60, max: 120, unit: "pack" },
    { name: "Pizza Base", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80", min: 30, max: 60, unit: "piece" },
    { name: "Burger Buns", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80", min: 40, max: 80, unit: "pack" },
    { name: "Hot Dog Buns", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80", min: 35, max: 70, unit: "pack" },
    { name: "Bagels", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80", min: 50, max: 100, unit: "pack" }
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
    { name: "Mineral Water", image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80", min: 20, max: 40, unit: "litre" },
    { name: "Bisleri Water", image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80", min: 20, max: 40, unit: "litre" },
    { name: "Kinley Water", image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80", min: 20, max: 40, unit: "litre" },
    { name: "Coca Cola", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "bottle" },
    { name: "Pepsi", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "bottle" },
    { name: "Thums Up", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "bottle" },
    { name: "Sprite", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "bottle" },
    { name: "Fanta", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "bottle" },
    { name: "Limca", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "bottle" },
    { name: "7 Up", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "bottle" },
    { name: "Mountain Dew", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "bottle" },
    { name: "Mirinda", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "bottle" },
    { name: "Maaza", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80", min: 30, max: 80, unit: "tetra" },
    { name: "Slice", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80", min: 30, max: 80, unit: "tetra" },
    { name: "Paper Boat Drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80", min: 25, max: 60, unit: "tetra" },
    { name: "Fruit Juice", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "litre" },
    { name: "Mango Juice", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80", min: 60, max: 150, unit: "litre" },
    { name: "Orange Juice", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80", min: 55, max: 130, unit: "litre" },
    { name: "Apple Juice", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80", min: 70, max: 160, unit: "litre" },
    { name: "Mixed Fruit Juice", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80", min: 65, max: 140, unit: "litre" },
    { name: "Energy Drink", image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&auto=format&fit=crop&q=80", min: 80, max: 150, unit: "can" },
    { name: "Red Bull", image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&auto=format&fit=crop&q=80", min: 100, max: 200, unit: "can" },
    { name: "Monster Energy", image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&auto=format&fit=crop&q=80", min: 120, max: 220, unit: "can" },
    { name: "Ice Tea", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&auto=format&fit=crop&q=80", min: 30, max: 70, unit: "bottle" },
    { name: "Cold Coffee", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&auto=format&fit=crop&q=80", min: 40, max: 90, unit: "bottle" },
    { name: "Milk Shake", image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "bottle" },
    { name: "Smoothie", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80", min: 60, max: 140, unit: "bottle" },
    { name: "Coconut Water", image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80", min: 30, max: 70, unit: "tetra" },
    { name: "Sports Drink", image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80", min: 40, max: 90, unit: "bottle" },
    { name: "Soda", image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=80", min: 20, max: 50, unit: "bottle" }
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
    { name: "Potato Chips", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80", min: 20, max: 50, unit: "pack" },
    { name: "Corn Chips", image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop&q=80", min: 25, max: 60, unit: "pack" },
    { name: "Tortilla Chips", image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop&q=80", min: 30, max: 70, unit: "pack" },
    { name: "Pretzels", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop&q=80", min: 40, max: 90, unit: "pack" },
    { name: "Popcorn", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80", min: 30, max: 80, unit: "pack" },
    { name: "Nuts Mix", image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&auto=format&fit=crop&q=80", min: 100, max: 250, unit: "pack" },
    { name: "Almonds", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 500, max: 1000, unit: "kg" },
    { name: "Cashews", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 600, max: 1200, unit: "kg" },
    { name: "Walnuts", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 400, max: 900, unit: "kg" },
    { name: "Pistachios", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 700, max: 1500, unit: "kg" },
    { name: "Peanuts", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 120, max: 250, unit: "kg" },
    { name: "Trail Mix", image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&auto=format&fit=crop&q=80", min: 150, max: 300, unit: "pack" },
    { name: "Granola Bars", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop&q=80", min: 30, max: 70, unit: "pack" },
    { name: "Protein Bars", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "pack" },
    { name: "Energy Bars", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "pack" },
    { name: "Chocolate Bars", image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&auto=format&fit=crop&q=80", min: 20, max: 60, unit: "bar" },
    { name: "Candy", image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop&q=80", min: 10, max: 30, unit: "pack" },
    { name: "Gummies", image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop&q=80", min: 15, max: 40, unit: "pack" },
    { name: "Licorice", image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop&q=80", min: 20, max: 50, unit: "pack" },
    { name: "Caramel", image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop&q=80", min: 25, max: 60, unit: "pack" },
    { name: "Toffee", image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop&q=80", min: 30, max: 70, unit: "pack" },
    { name: "Fudge", image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop&q=80", min: 40, max: 90, unit: "pack" },
    { name: "Marshmallows", image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "pack" },
    { name: "Cookies", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop&q=80", min: 30, max: 80, unit: "pack" },
    { name: "Biscuits", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&auto=format&fit=crop&q=80", min: 20, max: 60, unit: "pack" },
    { name: "Crackers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "pack" },
    { name: "Cheese Puffs", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80", min: 25, max: 70, unit: "pack" },
    { name: "Veggie Sticks", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80", min: 35, max: 80, unit: "pack" },
    { name: "Rice Cakes", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80", min: 30, max: 70, unit: "pack" },
    { name: "Pita Chips", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80", min: 40, max: 90, unit: "pack" },
    { name: "Banana Chips", image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "pack" },
    { name: "Apple Chips", image: "https://images.unsplash.com/photo-1559620192-032c64bc86af?w=800&auto=format&fit=crop&q=80", min: 60, max: 140, unit: "pack" },
    { name: "Dried Fruits", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 200, max: 500, unit: "kg" },
    { name: "Beef Jerky", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80", min: 100, max: 250, unit: "pack" },
    { name: "Pork Rinds", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=80", min: 80, max: 200, unit: "pack" }
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
    { name: "Chicken Breast", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=800&auto=format&fit=crop&q=80", min: 200, max: 400, unit: "kg" },
    { name: "Chicken Thighs", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=800&auto=format&fit=crop&q=80", min: 180, max: 350, unit: "kg" },
    { name: "Chicken Wings", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=800&auto=format&fit=crop&q=80", min: 150, max: 300, unit: "kg" },
    { name: "Whole Chicken", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=800&auto=format&fit=crop&q=80", min: 220, max: 450, unit: "kg" },
    { name: "Mutton", image: "https://images.unsplash.com/photo-1603048297172-c6099e5abfdd?w=800&auto=format&fit=crop&q=80", min: 500, max: 900, unit: "kg" },
    { name: "Lamb Chops", image: "https://images.unsplash.com/photo-1603048297172-c6099e5abfdd?w=800&auto=format&fit=crop&q=80", min: 600, max: 1200, unit: "kg" },
    { name: "Goat Meat", image: "https://images.unsplash.com/photo-1603048297172-c6099e5abfdd?w=800&auto=format&fit=crop&q=80", min: 450, max: 850, unit: "kg" },
    { name: "Pork Chops", image: "https://images.unsplash.com/photo-1603048297172-c6099e5abfdd?w=800&auto=format&fit=crop&q=80", min: 300, max: 600, unit: "kg" },
    { name: "Bacon", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=800&auto=format&fit=crop&q=80", min: 400, max: 800, unit: "kg" },
    { name: "Sausages", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=800&auto=format&fit=crop&q=80", min: 250, max: 500, unit: "pack" },
    { name: "Ham", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=800&auto=format&fit=crop&q=80", min: 350, max: 700, unit: "kg" },
    { name: "Turkey", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=800&auto=format&fit=crop&q=80", min: 400, max: 800, unit: "kg" },
    { name: "Duck", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=800&auto=format&fit=crop&q=80", min: 300, max: 600, unit: "kg" },
    { name: "Quail", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=800&auto=format&fit=crop&q=80", min: 200, max: 400, unit: "piece" },
    { name: "Rabbit", image: "https://images.unsplash.com/photo-1602476527205-e8b6c0a9d8a1?w=800&auto=format&fit=crop&q=80", min: 350, max: 700, unit: "kg" }
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
    { name: "Fresh Fish", image: "https://images.unsplash.com/photo-1599159340657-84d6dd7594f2?w=800&auto=format&fit=crop&q=80", min: 200, max: 500, unit: "kg" },
    { name: "Salmon", image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=800&auto=format&fit=crop&q=80", min: 600, max: 1200, unit: "kg" },
    { name: "Tuna", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=80", min: 400, max: 800, unit: "kg" },
    { name: "Prawns", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&auto=format&fit=crop&q=80", min: 300, max: 700, unit: "kg" },
    { name: "Shrimp", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&auto=format&fit=crop&q=80", min: 350, max: 750, unit: "kg" },
    { name: "Crab", image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=800&auto=format&fit=crop&q=80", min: 400, max: 900, unit: "kg" },
    { name: "Lobster", image: "https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?w=800&auto=format&fit=crop&q=80", min: 800, max: 2000, unit: "kg" },
    { name: "Squid", image: "https://images.unsplash.com/photo-1599159340657-84d6dd7594f2?w=800&auto=format&fit=crop&q=80", min: 250, max: 600, unit: "kg" },
    { name: "Octopus", image: "https://images.unsplash.com/photo-1599159340657-84d6dd7594f2?w=800&auto=format&fit=crop&q=80", min: 300, max: 700, unit: "kg" },
    { name: "Mussels", image: "https://images.unsplash.com/photo-1599159340657-84d6dd7594f2?w=800&auto=format&fit=crop&q=80", min: 200, max: 500, unit: "kg" },
    { name: "Clams", image: "https://images.unsplash.com/photo-1599159340657-84d6dd7594f2?w=800&auto=format&fit=crop&q=80", min: 180, max: 450, unit: "kg" },
    { name: "Oysters", image: "https://images.unsplash.com/photo-1599159340657-84d6dd7594f2?w=800&auto=format&fit=crop&q=80", min: 150, max: 400, unit: "kg" }
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
    { name: "Frozen Peas", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 60, max: 120, unit: "pack" },
    { name: "Frozen Corn", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 50, max: 100, unit: "pack" },
    { name: "Mixed Vegetables", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 70, max: 140, unit: "pack" },
    { name: "French Fries", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 80, max: 160, unit: "pack" },
    { name: "Potato Wedges", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 90, max: 180, unit: "pack" },
    { name: "Chicken Nuggets", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 150, max: 300, unit: "pack" },
    { name: "Fish Fingers", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 120, max: 250, unit: "pack" },
    { name: "Pizza", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 100, max: 250, unit: "piece" },
    { name: "Burger Patties", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 80, max: 180, unit: "pack" },
    { name: "Samosas", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "pack" },
    { name: "Spring Rolls", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 60, max: 140, unit: "pack" },
    { name: "Dim Sum", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 80, max: 180, unit: "pack" },
    { name: "Ice Cream", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 100, max: 250, unit: "tub" },
    { name: "Frozen Berries", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 150, max: 300, unit: "pack" },
    { name: "Frozen Mango", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 120, max: 250, unit: "pack" },
    { name: "Frozen Pizza Dough", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "pack" },
    { name: "Frozen Paratha", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "pack" },
    { name: "Frozen Ready Meals", image: "https://images.unsplash.com/photo-1578916170128-9a8b8f6c8a6c?w=800&auto=format&fit=crop&q=80", min: 80, max: 200, unit: "pack" }
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
    { name: "Turmeric Powder", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 100, max: 250, unit: "kg" },
    { name: "Red Chili Powder", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 120, max: 300, unit: "kg" },
    { name: "Coriander Powder", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 100, max: 250, unit: "kg" },
    { name: "Cumin Seeds", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 150, max: 350, unit: "kg" },
    { name: "Mustard Seeds", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 80, max: 200, unit: "kg" },
    { name: "Fenugreek Seeds", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 120, max: 300, unit: "kg" },
    { name: "Fennel Seeds", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 150, max: 350, unit: "kg" },
    { name: "Cardamom", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 800, max: 2000, unit: "kg" },
    { name: "Cinnamon", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 300, max: 700, unit: "kg" },
    { name: "Cloves", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 400, max: 900, unit: "kg" },
    { name: "Black Pepper", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 300, max: 700, unit: "kg" },
    { name: "Bay Leaves", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 200, max: 500, unit: "kg" },
    { name: "Nutmeg", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 500, max: 1200, unit: "kg" },
    { name: "Mace", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 600, max: 1400, unit: "kg" },
    { name: "Star Anise", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 400, max: 900, unit: "kg" },
    { name: "Curry Powder", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 150, max: 350, unit: "kg" },
    { name: "Garam Masala", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 200, max: 500, unit: "kg" },
    { name: "Kitchen King Masala", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 100, max: 250, unit: "pack" },
    { name: "Chicken Masala", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 80, max: 200, unit: "pack" },
    { name: "Biryani Masala", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 90, max: 220, unit: "pack" },
    { name: "Sambar Powder", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 70, max: 180, unit: "pack" },
    { name: "Rasam Powder", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 60, max: 150, unit: "pack" }
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