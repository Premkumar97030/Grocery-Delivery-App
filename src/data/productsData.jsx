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
    { name: "Fresh Carrots", image: "https://images.unsplash.com/photo-1598170845058-78131a90f4bf?w=800&auto=format&fit=crop&q=80", min: 20, max: 50, unit: "kg" },
    { name: "Potatoes", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80", min: 15, max: 40, unit: "kg" },
    { name: "Onions", image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&auto=format&fit=crop&q=80", min: 20, max: 60, unit: "kg" },
    { name: "Tomatoes", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80", min: 20, max: 60, unit: "kg" },
    { name: "Capsicum", image: "https://images.unsplash.com/photo-1566385101042-1a0f0c126a96?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "kg" },
    { name: "Cauliflower", image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=800&auto=format&fit=crop&q=80", min: 20, max: 50, unit: "piece" },
    { name: "Broccoli", image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "kg" },
    { name: "Spinach", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80", min: 10, max: 30, unit: "bunch" },
    { name: "Lettuce", image: "https://images.unsplash.com/photo-1594282525596-8dcc4b4f003f?w=800&auto=format&fit=crop&q=80", min: 30, max: 70, unit: "piece" },
    { name: "Cabbage", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop&q=80", min: 15, max: 40, unit: "piece" },
    { name: "Beetroot", image: "https://images.unsplash.com/photo-1598170845058-78131a90f4bf?w=800&auto=format&fit=crop&q=80", min: 20, max: 50, unit: "kg" },
    { name: "Radish", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80", min: 15, max: 40, unit: "bunch" },
    { name: "Turnip", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80", min: 20, max: 50, unit: "kg" },
    { name: "Brinjal", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 20, max: 60, unit: "kg" },
    { name: "Lady Finger", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80", min: 30, max: 80, unit: "kg" },
    { name: "Beans", image: "https://images.unsplash.com/photo-1566385101042-1a0f0c126a96?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "kg" },
    { name: "Peas", image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=800&auto=format&fit=crop&q=80", min: 60, max: 150, unit: "kg" },
    { name: "Cucumber", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80", min: 15, max: 40, unit: "kg" },
    { name: "Pumpkin", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80", min: 20, max: 50, unit: "kg" },
    { name: "Bottle Gourd", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80", min: 20, max: 50, unit: "kg" },
    { name: "Ridge Gourd", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80", min: 30, max: 70, unit: "kg" },
    { name: "Bitter Gourd", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "kg" },
    { name: "Sweet Corn", image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=800&auto=format&fit=crop&q=80", min: 20, max: 50, unit: "piece" },
    { name: "Garlic", image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&auto=format&fit=crop&q=80", min: 100, max: 250, unit: "kg" },
    { name: "Ginger", image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&auto=format&fit=crop&q=80", min: 80, max: 200, unit: "kg" },
    { name: "Spring Onion", image: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?w=800&auto=format&fit=crop&q=80", min: 15, max: 40, unit: "bunch" },
    { name: "Coriander Leaves", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80", min: 5, max: 20, unit: "bunch" },
    { name: "Mint Leaves", image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=800&auto=format&fit=crop&q=80", min: 10, max: 30, unit: "bunch" },
    { name: "Curry Leaves", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=80", min: 5, max: 15, unit: "bunch" },
    { name: "Fenugreek Leaves", image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=800&auto=format&fit=crop&q=80", min: 10, max: 25, unit: "bunch" },
    { name: "Drumsticks", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "kg" },
    { name: "Ash Gourd", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80", min: 20, max: 50, unit: "kg" },
    { name: "Snake Gourd", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80", min: 30, max: 70, unit: "kg" },
    { name: "Pointed Gourd", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "kg" },
    { name: "Yam", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80", min: 30, max: 80, unit: "kg" },
    { name: "Colocasia", image: "https://images.unsplash.com/photo-1598170845058-78131a90f4bf?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "kg" },
    { name: "Elephant Yam", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=80", min: 30, max: 70, unit: "kg" },
    { name: "Cluster Beans", image: "https://images.unsplash.com/photo-1566385101042-1a0f0c126a96?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "kg" },
    { name: "Broad Beans", image: "https://images.unsplash.com/photo-1566385101042-1a0f0c126a96?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "kg" },
    { name: "Green Chilies", image: "https://images.unsplash.com/photo-1596040033221-a1f4f8a7c4a9?w=800&auto=format&fit=crop&q=80", min: 20, max: 60, unit: "kg" }
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
    { name: "Refined Oil", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 120, max: 200, unit: "litre" },
    { name: "Mustard Oil", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 150, max: 250, unit: "litre" },
    { name: "Olive Oil", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 300, max: 600, unit: "litre" },
    { name: "Coconut Oil", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 200, max: 400, unit: "litre" },
    { name: "Ghee", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 400, max: 800, unit: "kg" },
    { name: "Butter", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 50, max: 100, unit: "pack" },
    { name: "Sugar", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 40, max: 80, unit: "kg" },
    { name: "Jaggery", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 60, max: 120, unit: "kg" },
    { name: "Salt", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 20, max: 40, unit: "kg" },
    { name: "Rock Salt", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 30, max: 60, unit: "kg" },
    { name: "Black Salt", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 40, max: 80, unit: "kg" },
    { name: "Flour", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 30, max: 60, unit: "kg" },
    { name: "Rice Flour", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 40, max: 80, unit: "kg" },
    { name: "Besan", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 50, max: 100, unit: "kg" },
    { name: "Semolina", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 40, max: 80, unit: "kg" },
    { name: "Vermicelli", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 60, max: 120, unit: "kg" },
    { name: "Pasta", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 50, max: 100, unit: "pack" },
    { name: "Noodles", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 40, max: 80, unit: "pack" },
    { name: "Rice", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 50, max: 100, unit: "kg" },
    { name: "Basmati Rice", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 80, max: 160, unit: "kg" },
    { name: "Brown Rice", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 100, max: 200, unit: "kg" },
    { name: "Lentils", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 70, max: 140, unit: "kg" },
    { name: "Chickpeas", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 80, max: 160, unit: "kg" },
    { name: "Kidney Beans", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 90, max: 180, unit: "kg" },
    { name: "Black Beans", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80", min: 100, max: 200, unit: "kg" }
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
    { name: "Corn Flakes", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 150, max: 300, unit: "pack" },
    { name: "Wheat Flakes", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 140, max: 280, unit: "pack" },
    { name: "Muesli", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 200, max: 400, unit: "pack" },
    { name: "Oats", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 100, max: 200, unit: "pack" },
    { name: "Granola", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 180, max: 350, unit: "pack" },
    { name: "Porridge", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 120, max: 250, unit: "pack" },
    { name: "Breakfast Cereal", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 160, max: 320, unit: "pack" },
    { name: "Chocos", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 130, max: 260, unit: "pack" },
    { name: "Malt-o-Meal", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 110, max: 220, unit: "pack" },
    { name: "Weetabix", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 180, max: 360, unit: "pack" },
    { name: "Special K", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 170, max: 340, unit: "pack" },
    { name: "Cheerios", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 190, max: 380, unit: "pack" },
    { name: "Froot Loops", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 200, max: 400, unit: "pack" },
    { name: "Cocoa Puffs", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 180, max: 360, unit: "pack" },
    { name: "Rice Krispies", image: "https://images.unsplash.com/photo-1627483262112-1f0e7e2a1407?w=800&auto=format&fit=crop&q=80", min: 160, max: 320, unit: "pack" }
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
    { name: "Shampoo", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 100, max: 300, unit: "bottle" },
    { name: "Conditioner", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 120, max: 350, unit: "bottle" },
    { name: "Body Wash", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 80, max: 250, unit: "bottle" },
    { name: "Hand Wash", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 50, max: 150, unit: "bottle" },
    { name: "Face Wash", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 70, max: 200, unit: "tube" },
    { name: "Moisturizer", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 100, max: 300, unit: "bottle" },
    { name: "Sunscreen", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 150, max: 400, unit: "tube" },
    { name: "Toothpaste", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 40, max: 120, unit: "tube" },
    { name: "Toothbrush", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 30, max: 100, unit: "piece" },
    { name: "Mouthwash", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 80, max: 200, unit: "bottle" },
    { name: "Deodorant", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 60, max: 180, unit: "can" },
    { name: "Perfume", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 300, max: 800, unit: "bottle" },
    { name: "Shaving Cream", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 50, max: 150, unit: "can" },
    { name: "Razor", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 40, max: 120, unit: "pack" },
    { name: "Sanitary Pads", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 60, max: 180, unit: "pack" },
    { name: "Tampons", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 80, max: 200, unit: "pack" },
    { name: "Hand Sanitizer", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 30, max: 100, unit: "bottle" },
    { name: "Body Lotion", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 120, max: 300, unit: "bottle" },
    { name: "Face Cream", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 150, max: 400, unit: "jar" },
    { name: "Lip Balm", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80", min: 40, max: 120, unit: "tube" }
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
    { name: "Dish Soap", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "bottle" },
    { name: "Laundry Detergent", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 100, max: 300, unit: "pack" },
    { name: "Fabric Softener", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 80, max: 200, unit: "bottle" },
    { name: "Floor Cleaner", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 60, max: 150, unit: "bottle" },
    { name: "Bathroom Cleaner", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 70, max: 180, unit: "bottle" },
    { name: "Glass Cleaner", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "bottle" },
    { name: "Multipurpose Cleaner", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 80, max: 200, unit: "bottle" },
    { name: "Disinfectant", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 90, max: 220, unit: "bottle" },
    { name: "Bleach", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "bottle" },
    { name: "Hand Soap", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "bottle" },
    { name: "Trash Bags", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 30, max: 80, unit: "pack" },
    { name: "Paper Towels", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 40, max: 100, unit: "roll" },
    { name: "Toilet Paper", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 30, max: 80, unit: "roll" },
    { name: "Dishwasher Detergent", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 100, max: 250, unit: "pack" },
    { name: "Air Freshener", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 50, max: 120, unit: "can" },
    { name: "Insect Repellent", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 60, max: 150, unit: "spray" },
    { name: "Mop", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 200, max: 500, unit: "piece" },
    { name: "Broom", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=800&auto=format&fit=crop&q=80", min: 150, max: 400, unit: "piece" }
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
    { name: "Dog Food", image: "https://images.unsplash.com/photo-1596273315327-5f0599334c5f?w=800&auto=format&fit=crop&q=80", min: 300, max: 800, unit: "pack" },
    { name: "Cat Food", image: "https://images.unsplash.com/photo-1596273315327-5f0599334c5f?w=800&auto=format&fit=crop&q=80", min: 250, max: 600, unit: "pack" },
    { name: "Bird Food", image: "https://images.unsplash.com/photo-1596273315327-5f0599334c5f?w=800&auto=format&fit=crop&q=80", min: 100, max: 300, unit: "pack" },
    { name: "Fish Food", image: "https://images.unsplash.com/photo-1596273315327-5f0599334c5f?w=800&auto=format&fit=crop&q=80", min: 50, max: 150, unit: "pack" },
    { name: "Pet Shampoo", image: "https://images.unsplash.com/photo-1596273315327-5f0599334c5f?w=800&auto=format&fit=crop&q=80", min: 150, max: 350, unit: "bottle" },
    { name: "Pet Toys", image: "https://images.unsplash.com/photo-1596273315327-5f0599334c5f?w=800&auto=format&fit=crop&q=80", min: 100, max: 300, unit: "piece" },
    { name: "Pet Bed", image: "https://images.unsplash.com/photo-1596273315327-5f0599334c5f?w=800&auto=format&fit=crop&q=80", min: 500, max: 1500, unit: "piece" },
    { name: "Pet Collar", image: "https://images.unsplash.com/photo-1596273315327-5f0599334c5f?w=800&auto=format&fit=crop&q=80", min: 200, max: 500, unit: "piece" },
    { name: "Pet Leash", image: "https://images.unsplash.com/photo-1596273315327-5f0599334c5f?w=800&auto=format&fit=crop&q=80", min: 150, max: 400, unit: "piece" },
    { name: "Litter Box", image: "https://images.unsplash.com/photo-1596273315327-5f0599334c5f?w=800&auto=format&fit=crop&q=80", min: 300, max: 800, unit: "piece" }
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
    { name: "Baby Diapers", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 300, max: 800, unit: "pack" },
    { name: "Baby Wipes", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 100, max: 300, unit: "pack" },
    { name: "Baby Formula", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 400, max: 1000, unit: "tin" },
    { name: "Baby Food", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 50, max: 150, unit: "jar" },
    { name: "Baby Cereal", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 200, max: 500, unit: "box" },
    { name: "Baby Shampoo", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 150, max: 350, unit: "bottle" },
    { name: "Baby Lotion", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 180, max: 400, unit: "bottle" },
    { name: "Baby Oil", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 120, max: 300, unit: "bottle" },
    { name: "Baby Powder", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 100, max: 250, unit: "bottle" },
    { name: "Baby Clothes", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 200, max: 600, unit: "piece" },
    { name: "Baby Bottles", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 150, max: 400, unit: "piece" },
    { name: "Pacifiers", image: "https://images.unsplash.com/photo-1519689680058-324335c77b4f?w=800&auto=format&fit=crop&q=80", min: 50, max: 150, unit: "pack" }
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
    { name: "Organic Rice", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 100, max: 200, unit: "kg" },
    { name: "Organic Wheat", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 80, max: 180, unit: "kg" },
    { name: "Organic Lentils", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 120, max: 250, unit: "kg" },
    { name: "Organic Honey", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 300, max: 700, unit: "kg" },
    { name: "Organic Tea", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 200, max: 500, unit: "pack" },
    { name: "Organic Coffee", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 400, max: 900, unit: "pack" },
    { name: "Organic Spices", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 150, max: 400, unit: "pack" },
    { name: "Organic Fruits", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 100, max: 300, unit: "kg" },
    { name: "Organic Vegetables", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 80, max: 250, unit: "kg" },
    { name: "Organic Milk", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 70, max: 120, unit: "litre" },
    { name: "Organic Eggs", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 100, max: 200, unit: "dozen" },
    { name: "Organic Chicken", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 300, max: 700, unit: "kg" },
    { name: "Organic Oil", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 200, max: 500, unit: "litre" },
    { name: "Organic Sugar", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 80, max: 180, unit: "kg" },
    { name: "Organic Flour", image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=800&auto=format&fit=crop&q=80", min: 60, max: 140, unit: "kg" }
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