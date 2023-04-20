export function formatarData(valor) {
  const data = new Date(valor)
  return data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
}

export function formatarReal(valor) {
  return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}

export function formatarNota(valor) {
  return valor.toLocaleString('pt-br', {style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2})
}