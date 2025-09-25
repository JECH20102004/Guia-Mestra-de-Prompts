# 📄 Plantillas de Prompts Básicos

## 🎯 Plantillas por Tipo de IA

### 💬 Plantillas para IA de Texto

#### 📝 Escritura Creativa
```markdown
[CONTEXTO]
Actúa como un escritor profesional especializado en [género específico].

[TAREA]
Escribe un [tipo de texto] sobre [tema] que [objetivo específico].

[ESTILO]
- Tono: [formal/informal/persuasivo/narrativo]
- Audiencia: [descripción del público objetivo]
- Longitud: [número de palabras o párrafos]

[RESTRICCIONES]
- Evita [elementos no deseados]
- Incluye [elementos obligatorios]
- Mantén [características específicas]

[ENTRADA]
[Información específica o pregunta]
```

**Ejemplo de Uso:**
```markdown
[CONTEXTO]
Actúa como un copywriter especializado en marketing digital para startups tecnológicas.

[TAREA]
Escribe un email de bienvenida que genere engagement y presente los beneficios de nuestra plataforma.

[ESTILO]
- Tono: Amigable pero profesional
- Audiencia: Profesionales de marketing, 25-45 años
- Longitud: 200-300 palabras

[RESTRICCIONES]
- Evita jerga técnica compleja
- Incluye un call-to-action claro
- Mantén un enfoque en beneficios, no características

[ENTRADA]
Producto: Plataforma de automatización de marketing "MarketFlow"
Beneficios principales: Ahorra 10 horas semanales, aumenta conversiones 30%
```

#### 🔍 Análisis y Investigación
```markdown
[ROL]
Eres un [especialista en dominio] con [años] de experiencia en [área específica].

[OBJETIVO]
Analiza [objeto de análisis] y proporciona insights sobre [aspectos específicos].

[METODOLOGÍA]
- Enfoque: [cualitativo/cuantitativo/mixto]
- Perspectivas: [listado de ángulos a considerar]
- Criterios de evaluación: [métricas o factores]

[FORMATO DE SALIDA]
1. Resumen ejecutivo (100 palabras)
2. Análisis detallado por sección
3. Conclusiones y recomendaciones
4. Próximos pasos sugeridos

[DATOS]
[Información o datos específicos a analizar]
```

### 🎨 Plantillas para IA de Imagen

#### 🖼️ Arte Digital Básico
```
[SUJETO PRINCIPAL] + [ACCIÓN/POSE] + [ENTORNO] + [ILUMINACIÓN] + [ESTILO ARTÍSTICO] + [PARÁMETROS]
```

**Estructura Expandida:**
```markdown
DESCRIPCIÓN PRINCIPAL:
Un/una [descripción detallada del sujeto]

COMPOSICIÓN:
- Plano: [close-up/medium shot/wide shot]
- Ángulo: [eye level/high angle/low angle]
- Regla de tercios: [posición del sujeto]

ILUMINACIÓN:
- Tipo: [natural/artificial/dramática]
- Dirección: [frontal/lateral/contraluz]
- Calidad: [suave/dura/difusa]

ESTILO:
- Movimiento artístico: [impresionismo/realismo/etc.]
- Técnica: [óleo/acuarela/digital]
- Paleta de colores: [cálida/fría/monocromática]

PARÁMETROS:
--ar [ratio] --s [0-1000] --q [1-2]
```

#### 📸 Fotografía Realista
```
[TIPO DE FOTOGRAFÍA] de [SUJETO], [POSE O ACCIÓN], [CONFIGURACIÓN DE CÁMARA], [ILUMINACIÓN], [COMPOSICIÓN], [ESTILO FOTOGRÁFICO]
```

**Ejemplo:**
```
Portrait photography de una mujer de 30 años sonriendo naturalmente,
mirando ligeramente hacia la cámara,
shot with 85mm lens, shallow depth of field,
golden hour natural lighting,
rule of thirds composition,
professional headshot style,
clean background
```

### 💻 Plantillas para IA de Código

#### 🏗️ Función Básica
```python
# [PROPÓSITO]: Descripción clara de qué hace la función
# [ENTRADA]: Tipos y descripción de parámetros
# [SALIDA]: Tipo de retorno y qué representa
# [EJEMPLO]: Caso de uso típico
# [RESTRICCIONES]: Limitaciones o consideraciones especiales

def nombre_funcion(parametros):
    """
    Docstring detallado explicando la función.
    
    Args:
        param1 (type): Descripción del parámetro
        param2 (type): Descripción del parámetro
    
    Returns:
        type: Descripción del valor de retorno
        
    Raises:
        ErrorType: Cuándo se produce este error
        
    Example:
        >>> nombre_funcion(valor1, valor2)
        resultado_esperado
    """
    # Implementación aquí
```

#### 🧪 Test-Driven Development
```python
# PASO 1: Escribir el test primero
def test_[nombre_funcion]():
    """
    Test para [descripción de la funcionalidad]:
    - [Caso de prueba 1]
    - [Caso de prueba 2]
    - [Caso de prueba 3]
    """
    # Arrange
    input_data = [datos de prueba]
    expected_result = [resultado esperado]
    
    # Act
    result = nombre_funcion(input_data)
    
    # Assert
    assert result == expected_result
    assert [condición adicional]

# PASO 2: Implementar la función
def nombre_funcion(parametros):
    """
    Implementación basada en los tests definidos.
    """
    # IA genera implementación
```

### 🎬 Plantillas para IA de Video

#### 🎥 Video Narrativo
```markdown
CONCEPTO:
[Descripción de la escena principal en 1-2 oraciones]

SUJETO Y ACCIÓN:
- Personaje: [descripción física y emocional]
- Acción principal: [qué está haciendo]  
- Emociones: [estado emocional visible]

CINEMATOGRAFÍA:
- Plano: [wide shot/medium shot/close-up]
- Movimiento: [static/pan/dolly/steadicam]
- Ángulo: [eye level/high/low angle]

ILUMINACIÓN:
- Calidad: [natural/artificial/soft/hard]
- Dirección: [frontal/side/back lighting]
- Tiempo: [dawn/day/dusk/night]

ESTILO:
- Género: [documentary/narrative/commercial]  
- Referencia: [director o película]
- Paleta: [warm/cool/monochrome]

PARÁMETROS:
Duración: [3s/10s/18s], FPS: [24/30/60], Ratio: [16:9/1:1/9:16]
```

#### 📱 Contenido para Redes Sociales
```
[ACCIÓN DINÁMICA] + [ELEMENTO VISUAL LLAMATIVO] + [RITMO/TEMPO] + [FORMATO VERTICAL] + [GANCHO EMOCIONAL]
```

**Ejemplo TikTok:**
```
Transformación rápida de outfit en 3 segundos,
persona girando mientras la ropa cambia mágicamente,  
cortes snappy al ritmo de música pop,
formato vertical 9:16,
colores vibrantes que generan sorpresa,
partículas brillantes durante la transición
```

## 🔧 Guías de Optimización

### ✅ Checklist Pre-Prompt

**Para Texto:**
- [ ] ¿Es específico el contexto?
- [ ] ¿Está clara la tarea objetivo?
- [ ] ¿He definido el formato de salida?
- [ ] ¿Incluí restricciones importantes?
- [ ] ¿Proporcioné ejemplos si es necesario?

**Para Imagen:**
- [ ] ¿Describí el sujeto principal claramente?
- [ ] ¿Especifiqué la composición deseada?  
- [ ] ¿Mencioné el estilo artístico?
- [ ] ¿Incluí parámetros técnicos?
- [ ] ¿Evité contradicciones estilísticas?

**Para Código:**
- [ ] ¿Expliqué el propósito claramente?
- [ ] ¿Definí entrada y salida esperada?
- [ ] ¿Incluí restricciones técnicas?
- [ ] ¿Proporcioné contexto del proyecto?
- [ ] ¿Consideré casos edge?

**Para Video:**
- [ ] ¿Describí la acción principal?
- [ ] ¿Especifiqué técnica cinematográfica?
- [ ] ¿Definí duración y formato?
- [ ] ¿Incluí referencias estilísticas?
- [ ] ¿Consideré la plataforma final?

### 🔁 Proceso de Iteración

#### 1. **Versión Inicial (V1.0)**
- Prompt básico con elementos esenciales
- Prueba rápida de funcionalidad
- Evaluación de resultados

#### 2. **Refinamiento (V2.0)**  
- Agregar especificidad donde falta
- Incluir restricciones identificadas
- Mejorar contexto y ejemplos

#### 3. **Optimización (V3.0)**
- Ajustar parámetros técnicos
- Balancear creatividad vs control
- Validar con casos edge

#### 4. **Versión Final (V4.0)**
- Documentar configuración óptima
- Crear variaciones para diferentes casos
- Preparar para reutilización

## 📊 Métricas de Evaluación

### KPIs por Tipo de Prompt

#### 💬 Texto
- **Relevancia**: ¿Responde a la pregunta/tarea?
- **Coherencia**: ¿Es lógico y bien estructurado?
- **Completitud**: ¿Incluye toda la información necesaria?
- **Estilo**: ¿Mantiene el tono apropiado?

#### 🎨 Imagen  
- **Fidelidad**: ¿Representa lo solicitado?
- **Calidad técnica**: ¿Resolución y detalles adecuados?
- **Coherencia visual**: ¿Estilo consistente?
- **Impacto**: ¿Logra el efecto deseado?

#### 💻 Código
- **Funcionalidad**: ¿Ejecuta correctamente?
- **Calidad**: ¿Sigue mejores prácticas?
- **Eficiencia**: ¿Rendimiento adecuado?
- **Mantenibilidad**: ¿Fácil de entender/modificar?

#### 🎬 Video
- **Narrativa**: ¿Comunica efectivamente?
- **Calidad visual**: ¿Técnicamente sólido?
- **Fluidez**: ¿Movimiento natural?
- **Engagement**: ¿Mantiene atención?

## 🎯 Casos de Uso Específicos

### 🏢 Empresarial
```markdown
CONTEXTO EMPRESARIAL:
Empresa [tamaño] del sector [industria] con [características específicas]

OBJETIVO DE NEGOCIO:  
[Meta específica medible con timeline]

AUDIENCIA:
- Perfil demográfico: [edad, ubicación, rol]
- Nivel de conocimiento: [principiante/intermedio/avanzado]
- Motivaciones principales: [qué los impulsa]

RESTRICCIONES:
- Presupuesto: [limitaciones financieras]
- Tiempo: [deadline o urgencia]
- Marca: [guidelines de tono y estilo]
- Legal: [consideraciones de compliance]

ENTREGABLES:
[Lista específica de outputs esperados]
```

### 🎓 Educativo
```markdown
CONTEXTO PEDAGÓGICO:
Nivel educativo: [primaria/secundaria/universitario/profesional]
Materia: [área de conocimiento específica]
Duración: [tiempo disponible para el contenido]

OBJETIVOS DE APRENDIZAJE:
Al completar esto, el estudiante podrá:
- [Objetivo 1 - verbo de acción + competencia]
- [Objetivo 2 - medible y específico]
- [Objetivo 3 - apropiado para el nivel]

METODOLOGÍA:
- Enfoque: [constructivista/tradicional/mixto]
- Recursos: [materiales disponibles]
- Evaluación: [cómo se medirá el aprendizaje]

ADAPTACIONES:
- Estilos de aprendizaje: [visual/auditivo/kinestésico]
- Necesidades especiales: [consideraciones de accesibilidad]
- Tecnología: [herramientas disponibles]
```

### 🎨 Creativo
```markdown
BRIEF CREATIVO:
Propósito: [comercial/artístico/personal/experimental]
Mensaje clave: [qué debe comunicar la pieza]
Emoción objetivo: [qué debe sentir la audiencia]

INSPIRACIÓN:
- Referencias visuales: [artistas, estilos, obras]
- Mood board: [paleta de colores, texturas, formas]
- Tendencias: [elementos contemporáneos relevantes]

LIMITACIONES CREATIVAS:
- Técnicas: [herramientas o medios específicos]
- Tiempo: [deadline para entrega]
- Recursos: [presupuesto o materiales]
- Aprobaciones: [stakeholders que deben aprobar]

MEDICIÓN DE ÉXITO:
- Impacto: [métricas de engagement o alcance]
- Calidad: [estándares técnicos mínimos]
- Satisfacción: [feedback del cliente/audiencia]
```

---

💡 **Consejo**: Estas plantillas son puntos de partida. Siempre adapta según tu contexto específico y experimenta con variaciones para encontrar lo que funciona mejor para tu caso de uso.

🔗 [Volver a Recursos](../README.md) | 📚 [Ver Ejemplos Prácticos](../../ejemplos/)