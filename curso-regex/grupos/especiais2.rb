texto = 'supermercado superação hiperMERCADO'

puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

# Positive Lookbehind
puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')

# Negative Lookbehind
puts texto.scan(/(?<!super)mercado/i).join(' ')