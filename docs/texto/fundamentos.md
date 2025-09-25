# 🏗️ Fundamentos de Ingeniería de Prompts

## 📖 ¿Qué es la Ingeniería de Prompts?

La **ingeniería de prompts** es la disciplina de diseñar, optimizar y refinar las instrucciones que damos a los modelos de IA para obtener respuestas más precisas, útiles y consistentes. Es tanto un arte como una ciencia que combina comprensión técnica con creatividad comunicativa.

## 🧠 Cómo Funcionan los Modelos de Lenguaje

### Conceptos Clave

#### 🎯 **Tokens**
- Unidades básicas de procesamiento (palabras, partes de palabras, puntuación)
- Los modelos tienen límites de tokens por conversación
- Ejemplo: "Hola mundo" = 2 tokens

#### 🌡️ **Temperatura**
- Controla la aleatoriedad de las respuestas
- 0.0 = Determinista, 1.0 = Muy creativo
- Valores típicos: 0.3-0.7

#### 🎲 **Top-p (Nucleus Sampling)**
- Controla la diversidad de palabras consideradas
- 0.1 = Conservador, 0.9 = Diverso

## 📐 Anatomía de un Prompt Efectivo

### Estructura CLEAR

```markdown
C - Context (Contexto)
L - Length (Longitud)
E - Examples (Ejemplos)
A - Audience (Audiencia)
R - Role (Rol)
```

### Ejemplo Aplicado

```markdown
[CONTEXTO] Estamos en 2024 y necesito contenido para redes sociales de una panadería artesanal.

[ROL] Actúa como un social media manager especializado en negocios locales.

[AUDIENCIA] Familias jóvenes (25-40 años) en una ciudad mediana.

[LONGITUD] Máximo 280 caracteres para Twitter, 150 palabras para Facebook.

[EJEMPLOS] Similar al tono de @panaderialocal: amigable, auténtico, enfocado en tradición.

[TAREA] Crea 3 posts para promocionar nuestro nuevo pan de centeno.
```

## 🔄 Tipos de Prompts

### 1. 🎯 **Prompts de Tarea Directa**
```markdown
Traduce este texto al francés: "El gato está en la mesa."
```

### 2. 💭 **Prompts de Rol**
```markdown
Actúa como un chef profesional y explícame cómo hacer pasta casera.
```

### 3. 🔍 **Prompts de Análisis**
```markdown
Analiza los pros y contras de trabajar desde casa vs. oficina.

Estructura tu respuesta en:
- Ventajas del trabajo remoto
- Desventajas del trabajo remoto
- Ventajas del trabajo presencial
- Desventajas del trabajo presencial
- Conclusión balanceada
```

### 4. 🎨 **Prompts Creativos**
```markdown
Escribe un cuento de 200 palabras sobre un robot que aprende a cocinar.

Requisitos:
- Tono humorístico
- Incluir al menos 3 desastres culinarios
- Final optimista
```

### 5. 🧩 **Prompts de Chain of Thought**
```markdown
Resuelve este problema paso a paso:

María tiene 15 manzanas. Regala 1/3 a su hermana y compra 8 más. 
¿Cuántas manzanas tiene ahora?

Muestra cada paso de tu razonamiento.
```

## 🎨 Técnicas de Prompting

### 1. **Zero-Shot Prompting**
```markdown
Clasifica este email como spam o no spam:
"¡GANA $1000 AHORA! Haz clic aquí inmediatamente!!!"
```

### 2. **Few-Shot Prompting**
```markdown
Clasifica estos emails:

Ejemplo 1: "Reunión de equipo mañana a las 3pm" → No spam
Ejemplo 2: "¡Oferta limitada! Compra ya!" → Spam

Clasifica: "Recordatorio: Cita médica el viernes"
```

### 3. **Chain of Thought**
```markdown
Explica paso a paso cómo resolver este problema de matemáticas:

Si un tren viaja a 80 km/h y necesita recorrer 240 km,
¿cuánto tiempo tardará?

Piensa paso a paso:
1. Identifica la fórmula necesaria
2. Sustituye los valores
3. Calcula el resultado
4. Verifica que tenga sentido
```

## ⚡ Optimización de Prompts

### Principios SMART

- **S**pecific - Específico
- **M**easurable - Medible
- **A**chievable - Alcanzable
- **R**elevant - Relevante
- **T**ime-bound - Con límite de tiempo

### Ejemplo de Optimización

❌ **Prompt Débil:**
```
Escribe algo sobre marketing
```

✅ **Prompt Optimizado:**
```markdown
[CONTEXTO] Soy dueño de una tienda de ropa online que vende a mujeres de 20-35 años.

[OBJETIVO] Necesito una estrategia de marketing en redes sociales para aumentar ventas un 25% en 3 meses.

[FORMATO] 
- Resumen ejecutivo (100 palabras)
- 5 tácticas específicas con métricas
- Timeline de implementación
- Presupuesto estimado

[RESTRICCIONES]
- Presupuesto máximo: $2000/mes
- Equipo: 1 persona medio tiempo
- Plataformas: Instagram y TikTok únicamente
```

## 🚫 Errores Comunes

### 1. **Ambigüedad**
❌ "Hazme un análisis"
✅ "Analiza las ventas de Q3 2023 vs Q3 2022, enfocándote en productos de mayor decrecimiento"

### 2. **Sobrecarga de Información**
❌ Prompts de 500+ palabras con información irrelevante
✅ Información concisa y pertinente

### 3. **Falta de Contexto**
❌ "¿Esto está bien?"
✅ "¿Este email de marketing cumple con las mejores prácticas de CAN-SPAM?"

### 4. **Expectativas Poco Realistas**
❌ "Predice el precio del Bitcoin para mañana"
✅ "Explica los factores que típicamente influyen en el precio del Bitcoin"

## 🎯 Casos de Uso por Industria

### 📊 **Marketing**
```markdown
[ROL] Eres un especialista en email marketing con 10 años de experiencia.

[TAREA] Optimiza este subject line para mejorar open rate:
"Newsletter Mensual - Enero 2024"

[CRITERIOS]
- Generar curiosidad
- Incluir beneficio claro
- Máximo 50 caracteres
- A/B testeable

[AUDIENCIA] Profesionales de tecnología, 28-45 años
```

### 🏥 **Salud** (Ejemplo Educativo)
```markdown
[ROL] Eres un educador de salud certificado.

[TAREA] Explica la importancia del ejercicio cardiovascular para audiencia general.

[FORMATO]
- Introducción amigable (50 palabras)
- 3 beneficios principales con explicación simple
- Recomendaciones prácticas
- Disclaimer apropiado

[RESTRICCIONES]
- Lenguaje simple, evitar jerga médica
- No dar consejos médicos específicos
- Recomendar consultar profesionales
```

### 🎓 **Educación**
```markdown
[ROL] Profesor de historia de bachillerato.

[TAREA] Crea un quiz de 10 preguntas sobre la Segunda Guerra Mundial.

[ESPECIFICACIONES]
- Mezcla de opción múltiple y respuesta corta
- Diferentes niveles de dificultad
- Incluir respuestas y explicaciones
- Enfoque en causas y consecuencias, no solo fechas
```

## 🔬 Iteración y Refinamiento

### Proceso de Mejora Continua

1. **📝 Versión Inicial**
   - Primera aproximación al prompt
   - Prueba básica de funcionalidad

2. **🔍 Análisis de Resultados**
   - ¿La respuesta cumple el objetivo?
   - ¿Falta información crucial?
   - ¿Hay información irrelevante?

3. **⚙️ Refinamiento**
   - Ajustar especificidad
   - Mejorar contexto
   - Optimizar formato

4. **✅ Validación**
   - Probar con casos edge
   - Verificar consistencia
   - Documentar la versión final

### Ejemplo de Iteración

**V1.0 (Básico):**
```
Escribe un email de ventas para mi producto
```

**V2.0 (Mejorado):**
```
Escribe un email de ventas profesional para mi curso online de fotografía, dirigido a principiantes
```

**V3.0 (Optimizado):**
```markdown
[CONTEXTO] Soy instructor de fotografía con 8 años de experiencia. Mi curso online "Fotografía para Principiantes" cuesta $149 y dura 6 semanas.

[OBJETIVO] Email de ventas para mi lista de suscriptores interesados en fotografía (3000 personas).

[AUDIENCIA] Principiantes en fotografía, 25-50 años, hobbyistas que quieren mejorar sus fotos familiares.

[ESTRUCTURA]
- Subject line atractivo
- Gancho emocional (dolor/deseo)
- Beneficios específicos del curso
- Prueba social (testimonios)
- Call-to-action claro
- PS con urgencia sutil

[TONO] Amigable, experto pero accesible, sin ser demasiado vendedor.

[LONGITUD] 300-400 palabras máximo.
```

## 🎓 Ejercicios Prácticos

### Ejercicio 1: Análisis de Prompt
Identifica qué está mal en este prompt y mejóralo:
```
Haz algo creativo con esta información: ventas, clientes, productos, año 2023
```

### Ejercicio 2: Construcción de Prompt
Crea un prompt para:
- Generar nombres para una startup de comida saludable
- Que sean memorables y fáciles de pronunciar
- Dirigidos a millennials urbanos
- Con dominio .com disponible

### Ejercicio 3: Optimización
Toma un prompt que uses regularmente y aplica el framework CLEAR para mejorarlo.

## 🔗 Próximos Pasos

Una vez que domines estos fundamentos:

1. 🤖 [Explora ChatGPT específicamente](chatgpt.md)
2. 🧠 [Aprende sobre Claude](claude.md)
3. 🔗 [Domina el Chain of Thought](../casos-avanzados/chain-of-thought.md)
4. 💼 [Aplica a casos de uso específicos](casos-uso/)

---

🏠 [Volver a IA de Texto](README.md) | ➡️ [Siguiente: ChatGPT](chatgpt.md)