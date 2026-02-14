body {
margin:0;
font-family:Arial;
background:#0f172a;
color:white;
}

header {
text-align:center;
padding:40px;
background:#1e293b;
}

.calculator-grid {
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
padding:40px;
}

.card {
background:#1e293b;
padding:25px;
border-radius:10px;
text-align:center;
text-decoration:none;
color:white;
font-weight:bold;
transition:.3s;
}

.card:hover {
background:#2563eb;
transform:translateY(-5px);
}

.cookie-banner {
position:fixed;
bottom:0;
width:100%;
background:#111827;
padding:15px;
text-align:center;
}
