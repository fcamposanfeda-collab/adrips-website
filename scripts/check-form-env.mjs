const endpoint = process.env.PUBLIC_FORM_ENDPOINT;
const key = process.env.PUBLIC_WEB3FORMS_ACCESS_KEY;

if (!endpoint || !key) {
  console.error('\n⚠️  Formularios sin configurar.');
  console.error('   Copia .env.example → .env y añade tu Access Key de https://web3forms.com\n');
  process.exit(1);
}

console.log('✓ Formularios configurados correctamente.\n');
