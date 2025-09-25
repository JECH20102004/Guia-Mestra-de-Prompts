# 💻 Guía de IA de Código

## 📖 Introducción

Los asistentes de IA para programación han transformado el desarrollo de software, proporcionando sugerencias inteligentes, completado de código automático y ayuda en debugging. Esta sección te guiará para maximizar la efectividad de herramientas como GitHub Copilot, Amazon CodeWhisperer y otros asistentes de código.

## 🎯 Objetivos de Aprendizaje

Al completar esta sección, podrás:
- Utilizar efectivamente asistentes de IA para programación
- Escribir comentarios y prompts que generen código de calidad
- Aplicar técnicas de pair programming con IA
- Optimizar workflows de desarrollo asistido por IA

## 🛠️ Herramientas Principales

| Herramienta | Desarrollador | Lenguajes | IDE Support | Precio |
|-------------|---------------|-----------|-------------|--------|
| **GitHub Copilot** | GitHub/OpenAI | 50+ | VS Code, JetBrains, etc. | $$$ |
| **Amazon CodeWhisperer** | AWS | 15+ | VS Code, JetBrains, AWS Cloud9 | $$/Gratis |
| **TabNine** | Codota | 30+ | 20+ IDEs | $$/Gratis |
| **Codeium** | Codeium | 70+ | 40+ IDEs | Gratis |
| **Replit Ghostwriter** | Replit | 16+ | Replit | $$ |

## 📚 Contenido

### 🏗️ Fundamentos
- [Principios Básicos](fundamentos.md)
- [Anatomía de un Prompt de Código](anatomia-prompt-codigo.md)
- [Best Practices](best-practices.md)

### 🤖 Herramientas Específicas
- [GitHub Copilot](github-copilot.md)
- [Amazon CodeWhisperer](codewhisperer.md)
- [TabNine](tabnine.md)
- [Codeium](codeium.md)

### 🔧 Técnicas Avanzadas
- [Test-Driven Development con IA](tdd-con-ia.md)
- [Refactoring Asistido](refactoring.md)
- [Debugging con IA](debugging.md)
- [Code Review Automatizado](code-review.md)

### 💼 Casos de Uso
- [Desarrollo Web](casos-uso/desarrollo-web.md)
- [Data Science](casos-uso/data-science.md)
- [Mobile Development](casos-uso/mobile-dev.md)
- [DevOps y Automation](casos-uso/devops.md)

## 🚀 Inicio Rápido

### Estructura Básica de Prompt

```python
# [CONTEXTO]: Descripción del problema o función
# [ENTRADA]: Parámetros esperados
# [SALIDA]: Tipo de retorno esperado
# [RESTRICCIONES]: Limitaciones o requerimientos específicos

def nombre_funcion():
    """
    [Descripción detallada de la función]
    """
    # Implementación aquí
```

### Ejemplo Práctico

```python
# Función para validar emails usando regex
# Entrada: string (email)
# Salida: boolean (True si es válido)
# Debe manejar dominios internacionales y casos edge

def validate_email(email):
    """
    Valida si un email tiene formato correcto usando regex.
    Soporta dominios internacionales y subdomainios.
    """
    # IA completará la implementación
```

## 🎯 Técnicas de Prompting para Código

### 1. **Comentarios Descriptivos**
```python
# Función que conecta a base de datos PostgreSQL usando SQLAlchemy
# Parámetros: host, port, database, user, password
# Retorna: objeto Session para hacer queries
# Incluye manejo de errores de conexión
```

### 2. **Especificación de Tipos**
```python
from typing import List, Dict, Optional

def process_user_data(
    users: List[Dict[str, str]], 
    filter_active: bool = True
) -> Optional[List[Dict[str, str]]]:
    """
    Procesa lista de usuarios y filtra según estado activo.
    Valida campos requeridos y normaliza datos.
    """
```

### 3. **Docstrings Detallados**
```python
def calculate_compound_interest(
    principal: float, 
    rate: float, 
    time: int, 
    compound_frequency: int = 12
) -> float:
    """
    Calcula interés compuesto usando la fórmula A = P(1 + r/n)^(nt)
    
    Args:
        principal: Cantidad inicial invertida
        rate: Tasa de interés anual (como decimal, ej: 0.05 para 5%)
        time: Tiempo en años
        compound_frequency: Veces que se capitaliza por año (default: 12)
    
    Returns:
        Monto final después del período especificado
        
    Raises:
        ValueError: Si algún parámetro es negativo o inválido
        
    Example:
        >>> calculate_compound_interest(1000, 0.05, 2, 12)
        1104.89
    """
```

### 4. **Context-Driven Development**
```python
# Sistema de autenticación para API REST
# Usando JWT tokens con expiración de 24 horas
# Base de datos: PostgreSQL con tabla 'users'
# Framework: FastAPI con dependencias de seguridad

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

security = HTTPBearer()

def authenticate_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    """
    Valida JWT token y retorna usuario autenticado.
    Verifica expiración y signature del token.
    """
    # IA generará la implementación completa
```

## 🔄 Workflows de Desarrollo

### 1. **TDD con IA (Test-Driven Development)**

```python
# Paso 1: Escribir el test primero
def test_user_registration():
    """
    Test para registrar nuevo usuario con validaciones:
    - Email único
    - Password mínimo 8 caracteres
    - Campos requeridos: name, email, password
    """
    user_data = {
        "name": "John Doe",
        "email": "john@example.com", 
        "password": "securepass123"
    }
    result = register_user(user_data)
    assert result.success == True
    assert "user_id" in result.data

# Paso 2: IA genera la función basada en el test
def register_user(user_data: dict):
    """
    Registra nuevo usuario con validaciones según test.
    """
    # Implementación generada por IA
```

### 2. **Refactoring Asistido**

```python
# ANTES: Función monolítica difícil de mantener
def process_order(order_data):
    # 50 líneas de código mezclando validación, 
    # cálculos, base de datos y emails...
    pass

# DESPUÉS: Prompt para refactoring
# "Refactorizar esta función separando responsabilidades:
# 1. Validación de datos
# 2. Cálculo de totales
# 3. Persistencia en BD
# 4. Envío de notificaciones
# Usar principios SOLID y patrones apropiados"

class OrderProcessor:
    def __init__(self, validator, calculator, repository, notifier):
        # IA genera constructor e implementación modular
```

## 📊 Comparativa de Herramientas

### Por Características

| Característica | Copilot | CodeWhisperer | TabNine | Codeium |
|----------------|---------|---------------|---------|---------|
| **Calidad de sugerencias** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Velocidad** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Soporte offline** | ❌ | ❌ | ✅ | ❌ |
| **Personalización** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Seguridad empresarial** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

### Por Lenguaje de Programación

#### 🐍 **Python**
1. **GitHub Copilot** - Excelente para data science y web
2. **CodeWhisperer** - Muy bueno para AWS/cloud
3. **Codeium** - Alternativa gratuita sólida

#### ☕ **Java**
1. **CodeWhisperer** - Optimizado para enterprise
2. **GitHub Copilot** - Muy bueno para frameworks modernos
3. **TabNine** - Excelente integración con IDEs

#### 🌐 **JavaScript/TypeScript**
1. **GitHub Copilot** - Líder en frontend/backend
2. **Codeium** - Muy bueno para React/Angular
3. **TabNine** - Sólido para Node.js

## 🎯 Mejores Prácticas

### ✅ Hacer

#### 📝 **Escribir Contexto Claro**
```python
# BUENO: Contexto específico y útil
# Función para procesar pagos con Stripe API
# Debe manejar errores de red y validar montos
# Retorna transaction_id si es exitoso
def process_payment(amount: float, card_token: str):
```

#### 🏗️ **Usar Arquitectura Modular**
```python
# BUENO: Funciones pequeñas y específicas
def validate_email(email: str) -> bool:
    """Valida formato de email usando regex."""
    
def send_welcome_email(user: User) -> bool:
    """Envía email de bienvenida usando template."""
    
def create_user_account(user_data: dict) -> User:
    """Crea cuenta de usuario validando datos."""
```

#### 🧪 **Incluir Tests**
```python
# BUENO: IA puede generar tests basados en función
def fibonacci(n: int) -> int:
    """
    Calcula n-ésimo número de Fibonacci.
    
    Test cases:
    - fibonacci(0) should return 0
    - fibonacci(1) should return 1  
    - fibonacci(10) should return 55
    """
```

### ❌ Evitar

#### 🌫️ **Comentarios Vagos**
```python
# MALO: Muy genérico
# función para hacer algo con datos
def process_data():
```

#### 🏗️ **Funciones Monolíticas**
```python
# MALO: Función que hace demasiado
def handle_everything(data):
    """Hace todo: validación, procesamiento, guardado, emails..."""
    # 200 líneas de código...
```

#### 🔒 **Ignorar Seguridad**
```python
# MALO: Sin considerar seguridad
# "crear función para ejecutar comandos SQL"
def run_sql(query):
```

## 🔥 Casos de Uso Avanzados

### 🚀 **API Development**
```python
# Sistema completo de API REST para e-commerce
# Stack: FastAPI + PostgreSQL + Redis + JWT
# Endpoints: auth, products, orders, payments
# Incluir documentación OpenAPI y tests

from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

app = FastAPI(title="E-commerce API", version="1.0.0")

# IA genera estructura completa basada en contexto
```

### 🤖 **Machine Learning Pipeline**
```python
# Pipeline completo de ML para predicción de precios
# Dataset: historical_prices.csv con 100k records
# Features: date, location, size, type, amenities
# Target: price
# Modelo: RandomForest con cross-validation

import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_score

class PricePredictionPipeline:
    """
    Pipeline ML para predicción de precios inmobiliarios.
    Incluye preprocesamiento, feature engineering y validación.
    """
    # IA genera implementación completa
```

### 🐳 **DevOps Automation**
```yaml
# Docker Compose para microservicios con:
# - API Gateway (Nginx)
# - Auth Service (Node.js)
# - Main API (Python FastAPI)  
# - Database (PostgreSQL)
# - Cache (Redis)
# - Monitoring (Prometheus + Grafana)

version: '3.8'
services:
  # IA genera configuración completa
```

## 📈 Métricas de Productividad

### Medición de Impacto

#### ⏱️ **Tiempo de Desarrollo**
- **Sin IA**: Función compleja = 2-4 horas
- **Con IA**: Función compleja = 30-60 minutos
- **Mejora**: 75-85% más rápido

#### 🐛 **Calidad del Código**
- Menos errores de sintaxis
- Mejores prácticas automáticas
- Patrones de diseño consistentes

#### 🧠 **Curva de Aprendizaje**
- Exploración de nuevos frameworks
- Aprendizaje de mejores prácticas
- Descubrimiento de librerías útiles

## 🛡️ Seguridad y Mejores Prácticas

### Consideraciones de Seguridad

#### 🔐 **Datos Sensibles**
```python
# NUNCA incluir en prompts:
# - Passwords o API keys reales
# - Datos personales de usuarios
# - Información propietaria

# EN SU LUGAR usar:
# - Placeholders: "YOUR_API_KEY_HERE"
# - Datos ficticios: "user@example.com"
# - Variables de entorno: os.getenv('API_KEY')
```

#### 🔍 **Code Review**
```python
# SIEMPRE revisar código generado por IA:
# - Vulnerabilidades de seguridad
# - Lógica de negocio correcta
# - Performance y escalabilidad
# - Compatibilidad con estándares del equipo
```

### Compliance y Licencias

- **Open Source**: Verificar compatibilidad de licencias
- **Enterprise**: Usar herramientas con políticas claras
- **IP Protection**: Configurar filtros apropiados

## 🎓 Ejercicios Prácticos

### Ejercicio 1: Prompting Básico
Crea un prompt para generar una función que:
- Valide números de tarjeta de crédito
- Use el algoritmo de Luhn
- Maneje diferentes tipos de tarjetas

### Ejercicio 2: Refactoring
Toma un código legacy y crea prompts para:
- Separar responsabilidades
- Agregar tests unitarios
- Mejorar documentación

### Ejercicio 3: TDD con IA
Practica TDD escribiendo tests primero y dejando que IA implemente.

## 🔗 Recursos Adicionales

### Documentación Oficial
- [GitHub Copilot Docs](https://docs.github.com/copilot)
- [Amazon CodeWhisperer](https://aws.amazon.com/codewhisperer/)
- [TabNine Documentation](https://www.tabnine.com/code-review)

### Comunidades
- [GitHub Copilot Community](https://github.com/community)
- [r/MachineLearning](https://reddit.com/r/MachineLearning)
- [Stack Overflow AI](https://stackoverflow.com/questions/tagged/artificial-intelligence)

### Cursos y Tutoriales
- [AI-Powered Development](https://learn.microsoft.com/training/)
- [Copilot Best Practices](https://github.com/microsoft/vscode-copilot)

---

🏠 [Volver al Índice Principal](../../INDICE.md) | ➡️ [Siguiente: Fundamentos](fundamentos.md)