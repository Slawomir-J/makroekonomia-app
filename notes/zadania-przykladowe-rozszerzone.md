# Zadania Przykładowe z Makroekonomii - Zestaw Rozszerzony

## Spis treści
1. [PKB i Wartość Dodana](#1-pkb-i-wartość-dodana)
2. [PKB Nominalny, Realny i Deflator](#2-pkb-nominalny-realny-i-deflator)
3. [Funkcja Konsumpcji i Oszczędności](#3-funkcja-konsumpcji-i-oszczędności)
4. [Mnożnik Keynesowski](#4-mnożnik-keynesowski)
5. [Równowaga Makroekonomiczna](#5-równowaga-makroekonomiczna)
6. [Polityka Fiskalna](#6-polityka-fiskalna)
7. [Kreacja Pieniądza](#7-kreacja-pieniądza)

---

## 1. PKB i Wartość Dodana

### ZADANIE 1.1: Łańcuch produkcyjny - od surowca do produktu finalnego

**Treść:**
W gospodarce funkcjonuje pięciostopniowy łańcuch produkcyjny:
- Górnik wydobywa rudę i sprzedaje ją hutnikowi za 500 zł
- Hutnik wytapia stal i sprzedaje ją producentowi części za 1200 zł
- Producent części wytwarza komponenty i sprzedaje je fabryce maszyn za 2000 zł
- Fabryka maszyn produkuje maszyny i sprzedaje je producentowi samochodów za 3500 zł
- Producent samochodów wytwarza samochód i sprzedaje go konsumentowi za 6000 zł

Oblicz PKB powstałe w tym łańcuchu produkcyjnym używając:
a) Metody wartości dóbr finalnych
b) Metody wartości dodanej
c) Wyjaśnij, dlaczego obie metody dają ten sam wynik

---

**DANE:**
- Sprzedaż rudy: 500 zł
- Sprzedaż stali: 1 200 zł
- Sprzedaż części: 2 000 zł
- Sprzedaż maszyn: 3 500 zł
- Sprzedaż samochodu: 6 000 zł

---

**ROZWIĄZANIE KROK PO KROKU:**

#### Krok 1: Metoda wartości dóbr finalnych

Dobrem finalnym jest samochód kupiony przez konsumenta (ostatecznego użytkownika).

```
PKB = Wartość dobra finalnego
PKB = 6 000 zł
```

**Wynik kroku 1:** PKB = 6 000 zł

---

#### Krok 2: Metoda wartości dodanej

Obliczamy wartość dodaną na każdym etapie produkcji:

**2.1. Wartość dodana górnika:**
```
Wartość produkcji: 500 zł
Koszty dóbr pośrednich: 0 zł (wydobywa surowiec)
Wartość dodana = 500 - 0 = 500 zł
```

**2.2. Wartość dodana hutnika:**
```
Wartość produkcji: 1 200 zł
Koszty dóbr pośrednich: 500 zł (ruda)
Wartość dodana = 1 200 - 500 = 700 zł
```

**2.3. Wartość dodana producenta części:**
```
Wartość produkcji: 2 000 zł
Koszty dóbr pośrednich: 1 200 zł (stal)
Wartość dodana = 2 000 - 1 200 = 800 zł
```

**2.4. Wartość dodana fabryki maszyn:**
```
Wartość produkcji: 3 500 zł
Koszty dóbr pośrednich: 2 000 zł (części)
Wartość dodana = 3 500 - 2 000 = 1 500 zł
```

**2.5. Wartość dodana producenta samochodów:**
```
Wartość produkcji: 6 000 zł
Koszty dóbr pośrednich: 3 500 zł (maszyny)
Wartość dodana = 6 000 - 3 500 = 2 500 zł
```

**2.6. Suma wartości dodanych:**
```
PKB = 500 + 700 + 800 + 1 500 + 2 500
PKB = 6 000 zł
```

**Wynik kroku 2:** PKB = 6 000 zł

---

#### Krok 3: Porównanie i wyjaśnienie

**Zestawienie:**
| Metoda | Wynik |
|--------|-------|
| Wartość dóbr finalnych | 6 000 zł |
| Suma wartości dodanych | 6 000 zł |

**Dlaczego obie metody dają ten sam wynik?**

1. **Unikamy podwójnego liczenia:** Metoda wartości dodanej odejmuje wartość dóbr pośrednich, które zostały już uwzględnione na wcześniejszych etapach produkcji.

2. **Wartość finalna = suma wkładów:** Każdy uczestnik łańcucha produkcyjnego dodaje pewną wartość do produktu. Suma tych wszystkich "wkładów" musi równać się wartości produktu finalnego.

3. **Matematyczne uzasadnienie:**
   ```
   Wartość finalna = Wartość początkowa + Wszystkie wartości dodane
   6 000 = 0 + (500 + 700 + 800 + 1 500 + 2 500)
   6 000 = 6 000 ✓
   ```

---

**ODPOWIEDŹ:**
PKB w tym łańcuchu produkcyjnym wynosi **6 000 zł**. Obie metody dają identyczny wynik, ponieważ suma wartości dodanych na każdym etapie produkcji równa się wartości dobra finalnego.

---

### ZADANIE 1.2: PKB przy produkcji wieloproduktowej

**Treść:**
Gospodarka wytwarza trzy rodzaje dóbr finalnych. W danym roku wyprodukowano:
- 100 kg chleba po 5 zł/kg (wartość: 500 zł)
- 50 litrów mleka po 4 zł/litr (wartość: 200 zł)
- 20 kg mięsa po 30 zł/kg (wartość: 600 zł)

Dodatkowo w gospodarce funkcjonuje:
- Młyn, który kupił od rolnika pszenicę za 200 zł i sprzedał mąkę piekarzowi za 280 zł
- Hodowca, który kupił paszę za 150 zł i sprzedał mleko mleczarni za 180 zł
- Rzeźnik, który kupił zwierzęta za 400 zł i sprzedał mięso sklepom za 600 zł

Oblicz PKB tej gospodarki.

---

**DANE:**
- Chleb: 100 kg × 5 zł = 500 zł (dobro finalne)
- Mleko: 50 l × 4 zł = 200 zł (dobro finalne)
- Mięso: 20 kg × 30 zł = 600 zł (dobro finalne)
- Transakcje pośrednie:
  - Pszenica → Mąka: 200 → 280 zł
  - Pasza → Mleko surowe: 150 → 180 zł
  - Zwierzęta → Mięso: 400 → 600 zł

---

**ROZWIĄZANIE KROK PO KROKU:**

#### Krok 1: Identyfikacja dóbr finalnych i pośrednich

**Dobra finalne** (trafiają do ostatecznego konsumenta):
- Chleb: 500 zł
- Mleko: 200 zł
- Mięso: 600 zł

**Dobra pośrednie** (są zużywane w dalszej produkcji):
- Pszenica, mąka, pasza, zwierzęta, mleko surowe

---

#### Krok 2: Metoda 1 - Wartość dóbr finalnych

```
PKB = Suma wartości wszystkich dóbr finalnych
PKB = 500 + 200 + 600
PKB = 1 300 zł
```

---

#### Krok 3: Metoda 2 - Suma wartości dodanych (weryfikacja)

**3.1. Produkcja chleba:**
```
Wartość dodana rolnika (pszenica): 200 zł
Wartość dodana młynarza: 280 - 200 = 80 zł
Wartość dodana piekarza: 500 - 280 = 220 zł
Suma: 200 + 80 + 220 = 500 zł
```

**3.2. Produkcja mleka:**
```
Wartość dodana producenta paszy: 150 zł
Wartość dodana hodowcy: 180 - 150 = 30 zł
Wartość dodana mleczarni: 200 - 180 = 20 zł
Suma: 150 + 30 + 20 = 200 zł
```

**3.3. Produkcja mięsa:**
```
Wartość dodana hodowcy zwierząt: 400 zł
Wartość dodana rzeźnika: 600 - 400 = 200 zł
Suma: 400 + 200 = 600 zł
```

**3.4. PKB (suma wartości dodanych):**
```
PKB = 500 + 200 + 600 = 1 300 zł
```

---

**ODPOWIEDŹ:**
PKB tej gospodarki wynosi **1 300 zł**. Wartość ta reprezentuje sumę wartości wszystkich dóbr finalnych wyprodukowanych w gospodarce.

---

## 2. PKB Nominalny, Realny i Deflator

### ZADANIE 2.1: Obliczanie PKB realnego i deflatora

**Treść:**
Gospodarka wytwarza dwa dobra: komputery i książki.

| Rok | Komputery (szt.) | Cena komputera (zł) | Książki (szt.) | Cena książki (zł) |
|-----|------------------|---------------------|----------------|-------------------|
| 2022 (bazowy) | 100 | 3 000 | 500 | 50 |
| 2023 | 120 | 3 300 | 550 | 60 |
| 2024 | 140 | 3 600 | 600 | 70 |

Przyjmując 2022 jako rok bazowy, oblicz dla każdego roku:
a) PKB nominalny
b) PKB realny
c) Deflator PKB
d) Stopę wzrostu realnego PKB (2023 i 2024)
e) Stopę inflacji (2023 i 2024)

---

**DANE:**
- Rok bazowy: 2022
- Dane produkcji i cen w tabeli powyżej

---

**ROZWIĄZANIE KROK PO KROKU:**

#### Krok 1: PKB Nominalny (w cenach bieżących)

**Wzór:**
```
PKB nominalny = Σ (Produkcja × Cena bieżąca)
```

**1.1. PKB nominalny 2022:**
```
PKB₂₀₂₂ = (100 × 3 000) + (500 × 50)
PKB₂₀₂₂ = 300 000 + 25 000
PKB₂₀₂₂ = 325 000 zł
```

**1.2. PKB nominalny 2023:**
```
PKB₂₀₂₃ = (120 × 3 300) + (550 × 60)
PKB₂₀₂₃ = 396 000 + 33 000
PKB₂₀₂₃ = 429 000 zł
```

**1.3. PKB nominalny 2024:**
```
PKB₂₀₂₄ = (140 × 3 600) + (600 × 70)
PKB₂₀₂₄ = 504 000 + 42 000
PKB₂₀₂₄ = 546 000 zł
```

---

#### Krok 2: PKB Realny (w cenach stałych roku bazowego)

**Wzór:**
```
PKB realny = Σ (Produkcja bieżąca × Cena roku bazowego)
```

**2.1. PKB realny 2022:**
```
PKB realny₂₀₂₂ = (100 × 3 000) + (500 × 50)
PKB realny₂₀₂₂ = 325 000 zł
(W roku bazowym PKB realny = PKB nominalny)
```

**2.2. PKB realny 2023:**
```
PKB realny₂₀₂₃ = (120 × 3 000) + (550 × 50)
PKB realny₂₀₂₃ = 360 000 + 27 500
PKB realny₂₀₂₃ = 387 500 zł
```

**2.3. PKB realny 2024:**
```
PKB realny₂₀₂₄ = (140 × 3 000) + (600 × 50)
PKB realny₂₀₂₄ = 420 000 + 30 000
PKB realny₂₀₂₄ = 450 000 zł
```

---

#### Krok 3: Deflator PKB

**Wzór:**
```
Deflator PKB = (PKB nominalny / PKB realny) × 100
```

**3.1. Deflator 2022:**
```
Deflator₂₀₂₂ = (325 000 / 325 000) × 100 = 100
(W roku bazowym deflator zawsze = 100)
```

**3.2. Deflator 2023:**
```
Deflator₂₀₂₃ = (429 000 / 387 500) × 100
Deflator₂₀₂₃ = 1,1071 × 100
Deflator₂₀₂₃ = 110,71
```

**3.3. Deflator 2024:**
```
Deflator₂₀₂₄ = (546 000 / 450 000) × 100
Deflator₂₀₂₄ = 1,2133 × 100
Deflator₂₀₂₄ = 121,33
```

---

#### Krok 4: Stopa wzrostu realnego PKB

**Wzór:**
```
Wzrost realnego PKB = [(PKB realny_t / PKB realny_t-1) - 1] × 100%
```

**4.1. Wzrost 2023:**
```
Wzrost₂₀₂₃ = [(387 500 / 325 000) - 1] × 100%
Wzrost₂₀₂₃ = [1,1923 - 1] × 100%
Wzrost₂₀₂₃ = 19,23%
```

**4.2. Wzrost 2024:**
```
Wzrost₂₀₂₄ = [(450 000 / 387 500) - 1] × 100%
Wzrost₂₀₂₄ = [1,1613 - 1] × 100%
Wzrost₂₀₂₄ = 16,13%
```

---

#### Krok 5: Stopa inflacji (zmiana deflatora)

**Wzór:**
```
Inflacja = [(Deflator_t / Deflator_t-1) - 1] × 100%
```

**5.1. Inflacja 2023:**
```
Inflacja₂₀₂₃ = [(110,71 / 100) - 1] × 100%
Inflacja₂₀₂₃ = [1,1071 - 1] × 100%
Inflacja₂₀₂₃ = 10,71%
```

**5.2. Inflacja 2024:**
```
Inflacja₂₀₂₄ = [(121,33 / 110,71) - 1] × 100%
Inflacja₂₀₂₄ = [1,0959 - 1] × 100%
Inflacja₂₀₂₄ = 9,59%
```

---

#### Krok 6: Zestawienie wyników

| Rok | PKB Nominalny | PKB Realny | Deflator | Wzrost realny | Inflacja |
|-----|---------------|------------|----------|---------------|----------|
| 2022 | 325 000 zł | 325 000 zł | 100,00 | - | - |
| 2023 | 429 000 zł | 387 500 zł | 110,71 | +19,23% | 10,71% |
| 2024 | 546 000 zł | 450 000 zł | 121,33 | +16,13% | 9,59% |

---

**ODPOWIEDŹ:**

a) **PKB nominalny:**
   - 2022: 325 000 zł
   - 2023: 429 000 zł
   - 2024: 546 000 zł

b) **PKB realny:**
   - 2022: 325 000 zł
   - 2023: 387 500 zł
   - 2024: 450 000 zł

c) **Deflator PKB:**
   - 2022: 100,00
   - 2023: 110,71
   - 2024: 121,33

d) **Wzrost realnego PKB:**
   - 2023: +19,23%
   - 2024: +16,13%

e) **Stopa inflacji:**
   - 2023: 10,71%
   - 2024: 9,59%

**Interpretacja:**
- Gospodarka rośnie realnie o 19,23% w 2023 i 16,13% w 2024
- Jednocześnie ceny rosną (inflacja) o około 10% rocznie
- PKB nominalny rośnie szybciej niż realny ze względu na inflację

---

### ZADANIE 2.2: Separacja efektu wzrostu od efektu inflacji

**Treść:**
W 2022 roku PKB nominalny wynosił 500 mld zł. W 2023 roku wzrósł do 550 mld zł. Jednocześnie deflator PKB wzrósł ze 100 do 108.

a) Oblicz realny PKB w 2022 i 2023 roku
b) O ile procent wzrósł PKB nominalny?
c) O ile procent wzrósł PKB realny?
d) Jaka była stopa inflacji?
e) Zweryfikuj, czy: (1 + wzrost nominalny) ≈ (1 + wzrost realny) × (1 + inflacja)

---

**DANE:**
- PKB nominalny 2022: 500 mld zł
- PKB nominalny 2023: 550 mld zł
- Deflator 2022: 100
- Deflator 2023: 108

---

**ROZWIĄZANIE KROK PO KROKU:**

#### Krok 1: Obliczanie realnego PKB

**Wzór:**
```
PKB realny = (PKB nominalny / Deflator) × 100
```

**1.1. PKB realny 2022:**
```
PKB realny₂₀₂₂ = (500 / 100) × 100
PKB realny₂₀₂₂ = 500 mld zł
```

**1.2. PKB realny 2023:**
```
PKB realny₂₀₂₃ = (550 / 108) × 100
PKB realny₂₀₂₃ = 509,26 mld zł
```

---

#### Krok 2: Wzrost PKB nominalnego

```
Wzrost nominalny = [(550 / 500) - 1] × 100%
Wzrost nominalny = [1,10 - 1] × 100%
Wzrost nominalny = 10%
```

---

#### Krok 3: Wzrost PKB realnego

```
Wzrost realny = [(509,26 / 500) - 1] × 100%
Wzrost realny = [1,0185 - 1] × 100%
Wzrost realny = 1,85%
```

---

#### Krok 4: Stopa inflacji

```
Inflacja = [(108 / 100) - 1] × 100%
Inflacja = [1,08 - 1] × 100%
Inflacja = 8%
```

---

#### Krok 5: Weryfikacja relacji

**Relacja Fishera (w przybliżeniu):**
```
(1 + wzrost nominalny) ≈ (1 + wzrost realny) × (1 + inflacja)
```

**Sprawdzenie:**
```
Lewa strona:
1 + 0,10 = 1,10

Prawa strona:
(1 + 0,0185) × (1 + 0,08) = 1,0185 × 1,08 = 1,09998 ≈ 1,10

1,10 ≈ 1,10 ✓
```

**Dokładniejsza relacja:**
```
Wzrost nominalny = Wzrost realny + Inflacja + (Wzrost realny × Inflacja)

10% = 1,85% + 8% + (1,85% × 8%)
10% = 1,85% + 8% + 0,148%
10% ≈ 9,998% ✓
```

---

**ODPOWIEDŹ:**

a) **PKB realny:**
   - 2022: 500 mld zł
   - 2023: 509,26 mld zł

b) **Wzrost PKB nominalnego:** 10%

c) **Wzrost PKB realnego:** 1,85%

d) **Stopa inflacji:** 8%

e) **Weryfikacja:** Relacja jest spełniona: 1,10 ≈ 1,0185 × 1,08 = 1,09998 ✓

**Interpretacja:**
- PKB nominalny wzrósł o 10%, ale większość tego wzrostu (8 punktów procentowych) to inflacja
- Rzeczywisty wzrost gospodarczy wyniósł tylko 1,85%
- To pokazuje, jak ważne jest rozróżnienie między wzrostem nominalnym a realnym

---

## 3. Funkcja Konsumpcji i Oszczędności

### ZADANIE 3.1: Pełna analiza funkcji konsumpcji

**Treść:**
Funkcja konsumpcji w gospodarce ma postać: **C = 80 + 0,75Y**

gdzie:
- C = konsumpcja
- Y = dochód rozporządzalny

Dla dochodów Y = {0, 200, 400, 600, 800} oblicz i przedstaw w tabeli:
a) Konsumpcję (C)
b) Oszczędności (S)
c) Przeciętną skłonność do konsumpcji (APC)
d) Przeciętną skłonność do oszczędzania (APS)
e) Krańcową skłonność do konsumpcji (MPC)
f) Krańcową skłonność do oszczędzania (MPS)

---

**DANE:**
- Funkcja konsumpcji: C = 80 + 0,75Y
- Konsumpcja autonomiczna (C₀): 80
- Krańcowa skłonność do konsumpcji (MPC): 0,75
- Poziomy dochodu: 0, 200, 400, 600, 800

---

**ROZWIĄZANIE KROK PO KROKU:**

#### Krok 1: Podstawowe definicje i wzory

**1.1. Konsumpcja:**
```
C = C₀ + MPC × Y
C = 80 + 0,75Y
```

**1.2. Oszczędności:**
```
S = Y - C
```

**1.3. Przeciętna skłonność do konsumpcji (APC):**
```
APC = C / Y
```

**1.4. Przeciętna skłonność do oszczędzania (APS):**
```
APS = S / Y
```

**1.5. Krańcowa skłonność do konsumpcji (MPC):**
```
MPC = ΔC / ΔY = 0,75 (stała)
```

**1.6. Krańcowa skłonność do oszczędzania (MPS):**
```
MPS = ΔS / ΔY = 1 - MPC = 1 - 0,75 = 0,25 (stała)
```

---

#### Krok 2: Obliczenia dla Y = 0

```
C = 80 + 0,75 × 0 = 80
S = 0 - 80 = -80
APC = 80 / 0 = nieokreślona (lub ∞)
APS = -80 / 0 = nieokreślona (lub -∞)
MPC = 0,75
MPS = 0,25
```

---

#### Krok 3: Obliczenia dla Y = 200

```
C = 80 + 0,75 × 200 = 80 + 150 = 230
S = 200 - 230 = -30
APC = 230 / 200 = 1,15
APS = -30 / 200 = -0,15
MPC = 0,75
MPS = 0,25
```

**Weryfikacja:** APC + APS = 1,15 + (-0,15) = 1,00 ✓

---

#### Krok 4: Obliczenia dla Y = 400

```
C = 80 + 0,75 × 400 = 80 + 300 = 380
S = 400 - 380 = 20
APC = 380 / 400 = 0,95
APS = 20 / 400 = 0,05
MPC = 0,75
MPS = 0,25
```

**Weryfikacja:** APC + APS = 0,95 + 0,05 = 1,00 ✓

---

#### Krok 5: Obliczenia dla Y = 600

```
C = 80 + 0,75 × 600 = 80 + 450 = 530
S = 600 - 530 = 70
APC = 530 / 600 = 0,883
APS = 70 / 600 = 0,117
MPC = 0,75
MPS = 0,25
```

**Weryfikacja:** APC + APS = 0,883 + 0,117 = 1,00 ✓

---

#### Krok 6: Obliczenia dla Y = 800

```
C = 80 + 0,75 × 800 = 80 + 600 = 680
S = 800 - 680 = 120
APC = 680 / 800 = 0,85
APS = 120 / 800 = 0,15
MPC = 0,75
MPS = 0,25
```

**Weryfikacja:** APC + APS = 0,85 + 0,15 = 1,00 ✓

---

#### Krok 7: Tabela zbiorcza

| Y | C | S | APC | APS | MPC | MPS |
|---|---|---|-----|-----|-----|-----|
| 0 | 80 | -80 | - | - | 0,75 | 0,25 |
| 200 | 230 | -30 | 1,15 | -0,15 | 0,75 | 0,25 |
| 400 | 380 | 20 | 0,95 | 0,05 | 0,75 | 0,25 |
| 600 | 530 | 70 | 0,883 | 0,117 | 0,75 | 0,25 |
| 800 | 680 | 120 | 0,85 | 0,15 | 0,75 | 0,25 |

---

#### Krok 8: Wnioski i obserwacje

**8.1. Punkt progu oszczędności (break-even point):**
Znajdźmy poziom dochodu, przy którym S = 0:
```
S = Y - C = 0
Y = C
Y = 80 + 0,75Y
Y - 0,75Y = 80
0,25Y = 80
Y = 320
```

Przy dochodzie 320 zł gospodarstwa domowe nie oszczędzają (S = 0).

**8.2. Relacje między wskaźnikami:**
- MPC + MPS = 0,75 + 0,25 = 1 ✓ (zawsze)
- APC + APS = 1 ✓ (zawsze, gdy Y > 0)
- Wraz ze wzrostem dochodu APC maleje (od 1,15 do 0,85)
- Wraz ze wzrostem dochodu APS rośnie (od -0,15 do 0,15)
- MPC i MPS są stałe (funkcja liniowa)

**8.3. Wykres konsumpcji:**
```
C |
  |                              /
  |                            /
680|                          / C = 80 + 0,75Y
  |                        /
  |                      /
  |                    /
380|                  /
  |                /
230|              /
  |            /
80|----------/-------------------
  |      Break-even (320)
  0    200  400  600  800    Y
```

---

**ODPOWIEDŹ:**

Kompletna tabela wyników znajduje się w Kroku 7. Kluczowe obserwacje:

1. **Konsumpcja autonomiczna** (80 zł) istnieje nawet przy zerowym dochodzie
2. **Punkt progu oszczędności** występuje przy Y = 320 zł
3. **MPC = 0,75** oznacza, że z każdej dodatkowej złotówki dochodu, 75 groszy jest konsumowane
4. **APC maleje** wraz ze wzrostem dochodu (bogaci mają niższy APC)
5. **APS rośnie** wraz ze wzrostem dochodu (bogaci oszczędzają większą część dochodu)

---

### ZADANIE 3.2: Zmiana parametrów funkcji konsumpcji

**Treść:**
Początkowa funkcja konsumpcji: C₁ = 100 + 0,8Y

a) Rząd wprowadza program transferów socjalnych, który zwiększa konsumpcję autonomiczną o 20. Zapisz nową funkcję konsumpcji C₂.

b) Następnie następuje wzrost niepewności gospodarczej, co powoduje, że gospodarstwa domowe zwiększają oszczędności - MPC spada do 0,7. Zapisz kolejną funkcję konsumpcji C₃.

c) Oblicz konsumpcję i oszczędności przy Y = 500 dla wszystkich trzech funkcji.

d) Która zmiana ma większy wpływ na konsumpcję przy Y = 500?

---

**DANE:**
- Funkcja początkowa: C₁ = 100 + 0,8Y
- Zmiana 1: C₀ wzrasta o 20
- Zmiana 2: MPC spada do 0,7
- Poziom dochodu do analizy: Y = 500

---

**ROZWIĄZANIE KROK PO KROKU:**

#### Krok 1: Funkcja C₂ (po transferach socjalnych)

```
C₂ = (100 + 20) + 0,8Y
C₂ = 120 + 0,8Y
```

**Zmiana:** Konsumpcja autonomiczna wzrosła z 100 do 120

---

#### Krok 2: Funkcja C₃ (po wzroście niepewności)

```
C₃ = 120 + 0,7Y
```

**Zmiana:** MPC spadł z 0,8 do 0,7 (gospodarstwa oszczędzają więcej)

---

#### Krok 3: Obliczenia dla Y = 500

**3.1. Funkcja C₁:**
```
C₁ = 100 + 0,8 × 500 = 100 + 400 = 500
S₁ = 500 - 500 = 0
```

**3.2. Funkcja C₂:**
```
C₂ = 120 + 0,8 × 500 = 120 + 400 = 520
S₂ = 500 - 520 = -20
```

**3.3. Funkcja C₃:**
```
C₃ = 120 + 0,7 × 500 = 120 + 350 = 470
S₃ = 500 - 470 = 30
```

---

#### Krok 4: Porównanie wpływu zmian

**4.1. Efekt transferów socjalnych (C₁ → C₂):**
```
ΔC = C₂ - C₁ = 520 - 500 = +20
```
Wzrost konsumpcji o 20 (równy wzrostowi C₀)

**4.2. Efekt wzrostu niepewności (C₂ → C₃):**
```
ΔC = C₃ - C₂ = 470 - 520 = -50
```
Spadek konsumpcji o 50

**4.3. Efekt łączny (C₁ → C₃):**
```
ΔC = C₃ - C₁ = 470 - 500 = -30
```
Spadek konsumpcji o 30

---

#### Krok 5: Analiza wrażliwości

Przy dochodzie Y = 500:

**Wpływ zmiany C₀ o 20:**
```
ΔC = 20 (bezpośredni efekt)
```

**Wpływ zmiany MPC z 0,8 na 0,7:**
```
ΔC = (0,7 - 0,8) × 500 = -0,1 × 500 = -50
```

**Wniosek:** Przy wyższych dochodach zmiana MPC ma większy wpływ niż zmiana konsumpcji autonomicznej.

---

#### Krok 6: Punkt równowagi oszczędności

Znajdźmy dochód, przy którym S = 0 dla każdej funkcji:

**6.1. Dla C₁:**
```
Y = 100 + 0,8Y
0,2Y = 100
Y = 500
```

**6.2. Dla C₂:**
```
Y = 120 + 0,8Y
0,2Y = 120
Y = 600
```

**6.3. Dla C₃:**
```
Y = 120 + 0,7Y
0,3Y = 120
Y = 400
```

---

#### Krok 7: Tabela zbiorcza wyników

| Funkcja | C₀ | MPC | C przy Y=500 | S przy Y=500 | Punkt progu (S=0) |
|---------|----| ----|--------------|--------------|-------------------|
| C₁ | 100 | 0,8 | 500 | 0 | 500 |
| C₂ | 120 | 0,8 | 520 | -20 | 600 |
| C₃ | 120 | 0,7 | 470 | 30 | 400 |

---

**ODPOWIEDŹ:**

a) **Nowa funkcja po transferach:** C₂ = 120 + 0,8Y

b) **Funkcja po wzroście niepewności:** C₃ = 120 + 0,7Y

c) **Konsumpcja i oszczędności przy Y = 500:**
   - C₁: Konsumpcja = 500, Oszczędności = 0
   - C₂: Konsumpcja = 520, Oszczędności = -20
   - C₃: Konsumpcja = 470, Oszczędności = 30

d) **Większy wpływ ma zmiana MPC** (spadek o 0,1), która zmniejsza konsumpcję o 50, podczas gdy wzrost C₀ o 20 zwiększa konsumpcję tylko o 20.

**Interpretacja ekonomiczna:**
- Transfery socjalne zwiększają konsumpcję o stałą kwotę (20) niezależnie od poziomu dochodu
- Spadek MPC ma tym większy wpływ, im wyższy jest dochód (przy Y=500 efekt wynosi 50)
- Przy wysokich dochodach polityka wpływająca na skłonność do konsumpcji jest skuteczniejsza niż transfery jednorazowe

---

## 4. Mnożnik Keynesowski

### ZADANIE 4.1: Mnożnik z różnymi komponentami

**Treść:**
W gospodarce:
- MPC = 0,75 (krańcowa skłonność do konsumpcji)
- Stopa podatku liniowego: t = 0,20 (20% dochodu)
- Krańcowa skłonność do importu: m = 0,10

Oblicz mnożnik wydatkowy uwzględniając:
a) Tylko MPC (model prosty)
b) MPC i podatki
c) MPC, podatki i import (gospodarka otwarta)
d) Porównaj, jak zmniejsza się wartość mnożnika
e) Jeśli inwestycje wzrosną o 100 mld, o ile wzrośnie PKB w każdym przypadku?

---

**DANE:**
- MPC = 0,75
- Stopa podatkowa t = 0,20
- Krańcowa skłonność do importu m = 0,10
- Wzrost inwestycji ΔI = 100 mld

---

**ROZWIĄZANIE KROK PO KROKU:**

#### Krok 1: Mnożnik prosty (tylko MPC)

**Wzór:**
```
k₁ = 1 / (1 - MPC)
```

**Obliczenie:**
```
k₁ = 1 / (1 - 0,75)
k₁ = 1 / 0,25
k₁ = 4
```

**Interpretacja:** Każda złotówka dodatkowych inwestycji zwiększa PKB o 4 złote.

---

#### Krok 2: Mnożnik z podatkami

**Wzór:**
```
k₂ = 1 / (1 - MPC × (1 - t))
```

**Wyjaśnienie:**
- Po opodatkowaniu z każdej złotówki dochodu pozostaje (1 - t)
- Konsumujemy tylko MPC × (1 - t) z każdej złotówki dochodu przed opodatkowaniem

**Obliczenie:**
```
k₂ = 1 / (1 - 0,75 × (1 - 0,20))
k₂ = 1 / (1 - 0,75 × 0,80)
k₂ = 1 / (1 - 0,60)
k₂ = 1 / 0,40
k₂ = 2,5
```

**Interpretacja:** Podatki "wyciekają" z obiegu, zmniejszając mnożnik z 4 do 2,5.

---

#### Krok 3: Mnożnik z podatkami i importem

**Wzór:**
```
k₃ = 1 / (1 - MPC × (1 - t) + m)
```

**Wyjaśnienie:**
- Import to kolejny "wyciek" z krajowego obiegu gospodarczego
- Część dochodu jest wydawana na dobra zagraniczne

**Obliczenie:**
```
k₃ = 1 / (1 - 0,75 × (1 - 0,20) + 0,10)
k₃ = 1 / (1 - 0,60 + 0,10)
k₃ = 1 / 0,50
k₃ = 2
```

**Interpretacja:** Import dodatkowo zmniejsza mnożnik z 2,5 do 2.

---

#### Krok 4: Porównanie mnożników

| Model | Mnożnik | Zmniejszenie względem prostego | Uwzględnione "wycieki" |
|-------|---------|-------------------------------|------------------------|
| Prosty | 4,0 | - | brak |
| Z podatkami | 2,5 | -1,5 (-37,5%) | podatki |
| Z podatkami i importem | 2,0 | -2,0 (-50%) | podatki + import |

**Analiza spadku:**
```
Spadek przez podatki: 4,0 → 2,5 (spadek o 1,5)
Spadek przez import: 2,5 → 2,0 (spadek o 0,5)
Spadek łączny: 4,0 → 2,0 (spadek o 2,0, czyli 50%)
```

---

#### Krok 5: Efekt wzrostu inwestycji o 100 mld

**Wzór:**
```
ΔY = k × ΔI
```

**5.1. Model prosty:**
```
ΔY₁ = 4 × 100 mld = 400 mld
```

**5.2. Model z podatkami:**
```
ΔY₂ = 2,5 × 100 mld = 250 mld
```

**5.3. Model z podatkami i importem:**
```
ΔY₃ = 2 × 100 mld = 200 mld
```

---

#### Krok 6: Analiza mechanizmu mnożnika (model z podatkami i importem)

Prześledzmy, jak 100 mld dodatkowych inwestycji przekłada się na PKB:

**Runda 1 - początkowy impuls:**
```
ΔI = 100 mld
```

**Runda 2 - pierwsza fala wydatków konsumpcyjnych:**
```
Dochód do dyspozycji = 100 × (1 - 0,20) = 80 mld
Konsumpcja krajowa = 80 × 0,75 = 60 mld
Import = 80 × 0,10 = 8 mld
Pozostaje w kraju = 60 mld
```

**Runda 3 - druga fala:**
```
Dochód do dyspozycji = 60 × (1 - 0,20) = 48 mld
Konsumpcja krajowa = 48 × 0,75 = 36 mld
Import = 48 × 0,10 = 4,8 mld
Pozostaje w kraju = 36 mld
```

**Rundy kolejne:**
```
Suma geometryczna:
ΔY = 100 + 60 + 36 + 21,6 + ... = 100 / 0,50 = 200 mld
```

---

**ODPOWIEDŹ:**

a) **Mnożnik prosty:** k₁ = 4

b) **Mnożnik z podatkami:** k₂ = 2,5

c) **Mnożnik z podatkami i importem:** k₃ = 2

d) **Porównanie:**
   - Podatki zmniejszają mnożnik o 37,5% (z 4 do 2,5)
   - Import dodatkowo zmniejsza o 20% (z 2,5 do 2)
   - Łącznie mnożnik spada o 50% (z 4 do 2)

e) **Efekt wzrostu inwestycji o 100 mld:**
   - Model prosty: PKB ↑ o 400 mld
   - Z podatkami: PKB ↑ o 250 mld
   - Z podatkami i importem: PKB ↑ o 200 mld

**Wnioski ekonomiczne:**
- Im więcej "wycieków" z obiegu gospodarczego (podatki, import, oszczędności), tym mniejszy mnożnik
- W realnej gospodarce mnożnik jest znacznie mniejszy niż w modelu teoretycznym
- Polityka fiskalna jest mniej skuteczna w małych, otwartych gospodarkach (duży import)

---

### ZADANIE 4.2: Mnożnik podatkowy vs mnożnik wydatków

**Treść:**
W gospodarce MPC = 0,8 i nie ma importu.

Rząd rozważa dwie opcje stymulowania gospodarki:
- Opcja A: Zwiększenie wydatków rządowych o 50 mld
- Opcja B: Obniżenie podatków o 50 mld

a) Oblicz mnożnik wydatków rządowych
b) Oblicz mnożnik podatkowy
c) O ile wzrośnie PKB w każdej opcji?
d) Która opcja jest skuteczniejsza i dlaczego?
e) Co by się stało, gdyby rząd jednocześnie zwiększył wydatki i podatki o 50 mld?

---

**DANE:**
- MPC = 0,8
- Import m = 0 (dla uproszczenia)
- ΔG = 50 mld (opcja A)
- ΔT = -50 mld (opcja B, obniżka)

---

**ROZWIĄZANIE KROK PO KROKU:**

#### Krok 1: Mnożnik wydatków rządowych

**Wzór:**
```
k_G = 1 / (1 - MPC)
```

**Obliczenie:**
```
k_G = 1 / (1 - 0,8)
k_G = 1 / 0,2
k_G = 5
```

---

#### Krok 2: Mnożnik podatkowy

**Wzór:**
```
k_T = -MPC / (1 - MPC)
```

**Uwaga:** Znak minus, bo obniżka podatków (ΔT < 0) zwiększa PKB.

**Obliczenie:**
```
k_T = -0,8 / (1 - 0,8)
k_T = -0,8 / 0,2
k_T = -4
```

**Dlaczego |k_T| < |k_G|?**
- Wydatki rządowe bezpośrednio zwiększają zagregowany popyt
- Obniżka podatków zwiększa dochód, ale część jest oszczędzana
- Tylko MPC × ΔT trafia do wydatków konsumpcyjnych

---

#### Krok 3: Efekt wzrostu wydatków (Opcja A)

```
ΔY_A = k_G × ΔG
ΔY_A = 5 × 50
ΔY_A = 250 mld
```

**Mechanizm:**
1. Rząd wydaje 50 mld (bezpośrednio → PKB)
2. Ci, którzy otrzymali te pieniądze, wydają 0,8 × 50 = 40 mld
3. Następna runda: 0,8 × 40 = 32 mld
4. Itd...
5. Suma: 50 + 40 + 32 + ... = 250 mld

---

#### Krok 4: Efekt obniżki podatków (Opcja B)

```
ΔY_B = k_T × ΔT
ΔY_B = (-4) × (-50)
ΔY_B = 200 mld
```

**Mechanizm:**
1. Gospodarstwa domowe mają 50 mld więcej dochodu
2. Konsumują: 0,8 × 50 = 40 mld (10 mld oszczędzają!)
3. Następna runda: 0,8 × 40 = 32 mld
4. Itd...
5. Suma: 40 + 32 + 25,6 + ... = 200 mld

---

#### Krok 5: Porównanie opcji

| Opcja | Narzędzie | Koszt budżetowy | Efekt (ΔY) | Efektywność (ΔY/koszt) |
|-------|-----------|-----------------|------------|------------------------|
| A | Wzrost wydatków | 50 mld | 250 mld | 5,0 |
| B | Obniżka podatków | 50 mld | 200 mld | 4,0 |

**Różnica efektów:**
```
ΔY_A - ΔY_B = 250 - 200 = 50 mld
```

To dokładnie równe początkowej zmianie wydatków/podatków!

---

#### Krok 6: Mnożnik zrównoważonego budżetu

**Pytanie:** Co się stanie, jeśli jednocześnie: ΔG = +50 i ΔT = +50?

**Wzór:**
```
ΔY = k_G × ΔG + k_T × ΔT
ΔY = 5 × 50 + (-4) × 50
ΔY = 250 - 200
ΔY = 50 mld
```

**Wniosek:** Mnożnik zrównoważonego budżetu = 1 !

```
Jeśli ΔG = ΔT, to ΔY = ΔG = ΔT
```

---

#### Krok 7: Intuicja ekonomiczna

**Dlaczego wydatki są skuteczniejsze niż obniżki podatków?**

**Sposób 1 - Bezpośredni wpływ:**
- Wydatki rządowe → 100% trafia do zagregowanego popytu
- Obniżka podatków → tylko MPC × 100% trafia do popytu (reszta oszczędności)

**Sposób 2 - Pierwsza runda:**
| Instrument | Bezpośredni efekt | Pierwsza runda konsumpcji | Łączny efekt 1. rundy |
|------------|-------------------|---------------------------|----------------------|
| Wydatki +50 | +50 | +40 (=0,8×50) | 50+40=90 |
| Podatki -50 | 0 | +40 (=0,8×50) | 0+40=40 |

Różnica w pierwszej rundzie: 90 - 40 = 50
Ta różnica utrzymuje się we wszystkich kolejnych rundach!

---

**ODPOWIEDŹ:**

a) **Mnożnik wydatków rządowych:** k_G = 5

b) **Mnożnik podatkowy:** k_T = -4

c) **Wzrost PKB:**
   - Opcja A (wydatki): +250 mld
   - Opcja B (podatki): +200 mld

d) **Skuteczniejsza jest Opcja A** (wydatki rządowe). Różnica wynosi 50 mld, ponieważ wydatki rządowe w całości zwiększają zagregowany popyt, podczas gdy część obniżki podatków jest oszczędzana.

e) **Jednoczesny wzrost wydatków i podatków o 50 mld** zwiększyłby PKB o dokładnie 50 mld (mnożnik zrównoważonego budżetu = 1). Dzieje się tak, ponieważ:
   - Wzrost wydatków zwiększa PKB o 250 mld
   - Wzrost podatków zmniejsza PKB o 200 mld
   - Efekt netto: 250 - 200 = 50 mld

**Praktyczne implikacje:**
- Rząd preferujący szybką stymulację wybierze wydatki
- Obniżki podatków są preferowane, gdy celem jest pozostawienie pieniędzy obywatelom
- W czasie recesji wydatki są skuteczniejsze niż obniżki podatków

---

## 5. Równowaga Makroekonomiczna

### ZADANIE 5.1: Równowaga w modelu z państwem i zagranicą

**Treść:**
W gospodarce otwartej:
- Konsumpcja: C = 100 + 0,75Y_d (gdzie Y_d = Y - T)
- Inwestycje: I = 200
- Wydatki rządowe: G = 300
- Podatki: T = 0,2Y (20% PKB)
- Eksport: X = 150
- Import: M = 50 + 0,15Y

Oblicz:
a) Dochód równowagi (Y*)
b) Konsumpcję w równowadze
c) Saldo budżetu państwa
d) Saldo handlu zagranicznego (eksport netto)
e) Czy gospodarka ma nadwyżkę czy deficyt?

---

**DANE:**
- C = 100 + 0,75Y_d, gdzie Y_d = Y - T
- I = 200
- G = 300
- T = 0,2Y
- X = 150
- M = 50 + 0,15Y

---

**ROZWIĄZANIE KROK PO KROKU:**

#### Krok 1: Warunek równowagi

**Tożsamość PKB w gospodarce otwartej:**
```
Y = C + I + G + (X - M)
Y = C + I + G + NX
```

gdzie NX = X - M (eksport netto)

---

#### Krok 2: Podstawienie funkcji

**2.1. Dochód do dyspozycji:**
```
Y_d = Y - T = Y - 0,2Y = 0,8Y
```

**2.2. Konsumpcja:**
```
C = 100 + 0,75Y_d
C = 100 + 0,75 × 0,8Y
C = 100 + 0,6Y
```

**2.3. Eksport netto:**
```
NX = X - M
NX = 150 - (50 + 0,15Y)
NX = 100 - 0,15Y
```

---

#### Krok 3: Równanie równowagi

```
Y = C + I + G + NX
Y = (100 + 0,6Y) + 200 + 300 + (100 - 0,15Y)
Y = 700 + 0,6Y - 0,15Y
Y = 700 + 0,45Y
```

**Rozwiązanie:**
```
Y - 0,45Y = 700
0,55Y = 700
Y* = 700 / 0,55
Y* = 1 272,73
```

---

#### Krok 4: Konsumpcja w równowadze

```
C* = 100 + 0,6 × 1 272,73
C* = 100 + 763,64
C* = 863,64
```

**Weryfikacja przez dochód do dyspozycji:**
```
T* = 0,2 × 1 272,73 = 254,55
Y_d* = 1 272,73 - 254,55 = 1 018,18
C* = 100 + 0,75 × 1 018,18 = 100 + 763,64 = 863,64 ✓
```

---

#### Krok 5: Saldo budżetu państwa

**Wzór:**
```
Saldo budżetu = T - G
```

**Obliczenie:**
```
T* = 0,2 × 1 272,73 = 254,55
G = 300
Saldo budżetu = 254,55 - 300 = -45,45
```

**Interpretacja:** Deficyt budżetowy wynosi 45,45.

---

#### Krok 6: Saldo handlu zagranicznego

**6.1. Import w równowadze:**
```
M* = 50 + 0,15 × 1 272,73
M* = 50 + 190,91
M* = 240,91
```

**6.2. Eksport netto:**
```
NX* = X - M*
NX* = 150 - 240,91
NX* = -90,91
```

**Interpretacja:** Deficyt handlowy wynosi 90,91.

---

#### Krok 7: Weryfikacja równowagi

```
Y = C + I + G + NX
1 272,73 = 863,64 + 200 + 300 + (-90,91)
1 272,73 = 1 272,73 ✓
```

---

#### Krok 8: Analiza deficytów

**Tożsamość oszczędności i inwestycji:**
```
S = I + (G - T) + NX
```

gdzie:
- S = oszczędności prywatne
- (G - T) = deficyt budżetowy
- NX = deficyt handlowy

**8.1. Oszczędności prywatne:**
```
S = Y_d - C
S = 1 018,18 - 863,64
S = 154,54
```

**8.2. Weryfikacja:**
```
S = I + (G - T) + NX
154,54 = 200 + 45,45 + (-90,91)
154,54 = 154,54 ✓
```

**Interpretacja:**
- Oszczędności prywatne (154,54) finansują:
  - Inwestycje (200)
  - Część deficytu budżetowego
- Brakujące finansowanie (200 - 154,54 = 45,45) pochodzi z zagranicy przez deficyt handlowy

---

#### Krok 9: Tabela podsumowująca

| Wielkość | Wartość | % PKB |
|----------|---------|-------|
| **PKB (Y*)** | 1 272,73 | 100% |
| Konsumpcja (C) | 863,64 | 67,9% |
| Inwestycje (I) | 200,00 | 15,7% |
| Wydatki rządowe (G) | 300,00 | 23,6% |
| Eksport (X) | 150,00 | 11,8% |
| Import (M) | 240,91 | 18,9% |
| **Eksport netto (NX)** | **-90,91** | **-7,1%** |
| Podatki (T) | 254,55 | 20,0% |
| **Saldo budżetu (T-G)** | **-45,45** | **-3,6%** |
| Oszczędności (S) | 154,54 | 12,1% |

---

**ODPOWIEDŹ:**

a) **Dochód równowagi:** Y* = 1 272,73

b) **Konsumpcja w równowadze:** C* = 863,64

c) **Saldo budżetu państwa:** -45,45 (deficyt 3,6% PKB)

d) **Saldo handlu zagranicznego:** -90,91 (deficyt 7,1% PKB)

e) **Gospodarka ma podwójny deficyt:**
   - Deficyt budżetowy: 45,45 (3,6% PKB)
   - Deficyt handlowy: 90,91 (7,1% PKB)

   Jest to sytuacja "podwójnego deficytu" (twin deficits), gdzie deficyt budżetowy częściowo przyczynia się do deficytu handlowego. Kraj importuje więcej niż eksportuje i wydaje więcej niż zbiera w podatkach.

---

## 6. Polityka Fiskalna

### ZADANIE 6.1: Ekspansywna polityka fiskalna - efekt mnożnikowy

**Treść:**
Gospodarka znajduje się w recesji. Aktualne dane:
- C = 200 + 0,8(Y - T)
- I = 150
- G = 250
- T = 0,25Y
- Pełne zatrudnienie osiągane jest przy Y_FE = 2 000

a) Oblicz aktualny PKB (Y*)
b) O ile faktyczny PKB jest niższy od potencjalnego (luka recesyjna)?
c) O ile trzeba zwiększyć wydatki rządowe, aby osiągnąć pełne zatrudnienie?
d) Alternatywnie, o ile trzeba obniżyć stopę podatkową, aby osiągnąć Y_FE?
e) Które rozwiązanie jest tańsze dla budżetu?

---

**DANE:**
- C = 200 + 0,8(Y - T)
- I = 150
- G = 250
- T = 0,25Y
- Y_FE = 2 000 (PKB przy pełnym zatrudnieniu)

---

**ROZWIĄZANIE KROK PO KROKU:**

#### Krok 1: Aktualny PKB równowagi

**1.1. Dochód do dyspozycji:**
```
Y_d = Y - T = Y - 0,25Y = 0,75Y
```

**1.2. Konsumpcja:**
```
C = 200 + 0,8 × 0,75Y
C = 200 + 0,6Y
```

**1.3. Równowaga:**
```
Y = C + I + G
Y = (200 + 0,6Y) + 150 + 250
Y = 600 + 0,6Y
0,4Y = 600
Y* = 1 500
```

---

#### Krok 2: Luka recesyjna

```
Luka recesyjna = Y_FE - Y*
Luka recesyjna = 2 000 - 1 500
Luka recesyjna = 500
```

**Interpretacja:** Gospodarka produkuje o 500 mniej niż przy pełnym zatrudnieniu (25% poniżej potencjału).

---

#### Krok 3: Mnożnik wydatków rządowych

**Wzór:**
```
k_G = 1 / (1 - MPC(1 - t))
```

**Obliczenie:**
```
k_G = 1 / (1 - 0,8 × (1 - 0,25))
k_G = 1 / (1 - 0,8 × 0,75)
k_G = 1 / (1 - 0,6)
k_G = 1 / 0,4
k_G = 2,5
```

---

#### Krok 4: Potrzebna zmiana wydatków rządowych

**Wzór:**
```
ΔY = k_G × ΔG
ΔG = ΔY / k_G
```

**Obliczenie:**
```
ΔG = 500 / 2,5
ΔG = 200
```

**Nowe wydatki rządowe:**
```
G_nowe = 250 + 200 = 450
```

---

#### Krok 5: Weryfikacja (wydatki)

**5.1. Nowa równowaga:**
```
Y = (200 + 0,6Y) + 150 + 450
Y = 800 + 0,6Y
0,4Y = 800
Y = 2 000 ✓
```

**5.2. Nowe wpływy podatkowe:**
```
T_nowe = 0,25 × 2 000 = 500
```

**5.3. Nowe saldo budżetu:**
```
Saldo = T - G = 500 - 450 = 50 (nadwyżka!)
```

**Poprzednie saldo budżetu:**
```
T_stare = 0,25 × 1 500 = 375
Saldo_stare = 375 - 250 = 125 (nadwyżka)
```

**Zmiana salda:**
```
ΔSaldo = 50 - 125 = -75 (pogorszenie o 75)
```

---

#### Krok 6: Obniżka stopy podatkowej - metoda analityczna

**Cel:** Znaleźć nową stopę podatkową t_nowa taką, że Y = 2 000

**6.1. Równanie z nową stopą t_nowa:**
```
Y_d = Y - t_nowa × Y = Y(1 - t_nowa)
C = 200 + 0,8Y(1 - t_nowa) = 200 + 0,8Y - 0,8t_nowa × Y
```

**6.2. Warunek równowagi:**
```
Y = C + I + G
2 000 = [200 + 0,8 × 2 000 × (1 - t_nowa)] + 150 + 250
2 000 = 200 + 1 600 - 1 600t_nowa + 400
2 000 = 2 200 - 1 600t_nowa
1 600t_nowa = 200
t_nowa = 200 / 1 600
t_nowa = 0,125 = 12,5%
```

**Obniżka stopy podatkowej:**
```
Δt = t_nowa - t_stara
Δt = 0,125 - 0,25
Δt = -0,125 = -12,5 punktów procentowych
```

---

#### Krok 7: Weryfikacja (podatki)

**7.1. Sprawdzenie równowagi:**
```
T = 0,125 × 2 000 = 250
Y_d = 2 000 - 250 = 1 750
C = 200 + 0,8 × 1 750 = 200 + 1 400 = 1 600
Y = C + I + G = 1 600 + 150 + 250 = 2 000 ✓
```

**7.2. Saldo budżetu przy obniżce podatków:**
```
T_nowe = 0,125 × 2 000 = 250
G = 250
Saldo = 250 - 250 = 0 (zrównoważony)
```

**Poprzednie saldo:** 125 (nadwyżka)

**Zmiana salda:**
```
ΔSaldo = 0 - 125 = -125 (pogorszenie o 125)
```

---

#### Krok 8: Porównanie opcji fiskalnych

| Opcja | Narzędzie | Zmiana | PKB końcowy | Saldo budżetu | Koszt dla budżetu |
|-------|-----------|--------|-------------|---------------|-------------------|
| **Wyjściowa** | - | - | 1 500 | +125 | - |
| **A** | Wydatki | G: +200 | 2 000 | +50 | -75 |
| **B** | Podatki | t: -12,5 pp | 2 000 | 0 | -125 |

**Wnioski:**
- Obie opcje osiągają Y_FE = 2 000
- Opcja A (wydatki) jest tańsza dla budżetu: pogorszenie salda o 75 vs 125
- Wydatki są bardziej efektywne, bo mają większy mnożnik

---

#### Krok 9: Efektywność fiskalna

**9.1. Efektywność wzrostu wydatków:**
```
Koszt dla budżetu: 75
Wzrost PKB: 500
Efektywność: 500 / 75 = 6,67
```

Każda złotówka pogorszenia salda budżetu generuje 6,67 zł wzrostu PKB.

**9.2. Efektywność obniżki podatków:**
```
Koszt dla budżetu: 125
Wzrost PKB: 500
Efektywność: 500 / 125 = 4,0
```

Każda złotówka pogorszenia salda budżetu generuje 4 zł wzrostu PKB.

---

**ODPOWIEDŹ:**

a) **Aktualny PKB:** Y* = 1 500

b) **Luka recesyjna:** 500 (PKB jest o 25% niższy od potencjalnego)

c) **Wzrost wydatków rządowych:** ΔG = 200 (z 250 do 450)
   - Mnożnik: 2,5
   - Efekt: 200 × 2,5 = 500 (zamyka lukę)

d) **Obniżka stopy podatkowej:** Δt = -12,5 punktów procentowych (z 25% do 12,5%)

e) **Opcja A (wydatki) jest tańsza:**
   - Koszt opcji A: pogorszenie salda o 75
   - Koszt opcji B: pogorszenie salda o 125
   - Wydatki są o 67% bardziej efektywne

   Wydatki są tańsze i skuteczniejsze, ponieważ mają większy mnożnik (bezpośrednio trafiają do zagregowanego popytu).

---

## 7. Kreacja Pieniądza

### ZADANIE 7.1: System rezerw cząstkowych i kreacja pieniądza

**Treść:**
Bank centralny wymaga, aby banki komercyjne utrzymywały 10% depozytów jako rezerwy obowiązkowe.

Scenariusz:
1. Bank centralny kupuje obligacje od obywatela za 1 000 zł, który wpłaca pieniądze do Banku A
2. Bank A pożycza maksymalną możliwą kwotę
3. Pożyczone pieniądze są wpłacane do Banku B
4. Bank B pożycza maksymalną możliwą kwotę
5. Proces powtarza się

Oblicz:
a) Ile Bank A może pożyczyć?
b) Ile Bank B może pożyczyć?
c) Jaka jest maksymalna kreacja pieniądza w całym systemie?
d) Ile wynosi mnożnik pieniężny?
e) Sporządź tabelę pokazującą pierwsze 5 rund kreacji pieniądza
f) Co się stanie, jeśli stopa rezerw wzrośnie do 20%?

---

**DANE:**
- Stopa rezerw obowiązkowych: r = 0,10 (10%)
- Początkowy depozyt w systemie: 1 000 zł
- Banki pożyczają maksymalne możliwe kwoty

---

**ROZWIĄZANIE KROK PO KROKU:**

#### Krok 1: Bank A - pierwsza runda

**1.1. Depozyt otrzymany:**
```
D₁ = 1 000 zł
```

**1.2. Rezerwa obowiązkowa:**
```
R₁ = r × D₁
R₁ = 0,10 × 1 000
R₁ = 100 zł
```

**1.3. Maksymalna kwota do pożyczenia:**
```
L₁ = D₁ - R₁
L₁ = 1 000 - 100
L₁ = 900 zł
```

---

#### Krok 2: Bank B - druga runda

Pożyczone 900 zł z Banku A wraca do systemu jako depozyt w Banku B.

**2.1. Depozyt otrzymany:**
```
D₂ = L₁ = 900 zł
```

**2.2. Rezerwa obowiązkowa:**
```
R₂ = 0,10 × 900 = 90 zł
```

**2.3. Maksymalna kwota do pożyczenia:**
```
L₂ = 900 - 90 = 810 zł
```

---

#### Krok 3: Maksymalna kreacja pieniądza

**Wzór na mnożnik pieniężny:**
```
m = 1 / r
```

**Obliczenie:**
```
m = 1 / 0,10 = 10
```

**Maksymalna podaż pieniądza:**
```
M = m × Baza monetarna
M = 10 × 1 000
M = 10 000 zł
```

**Kreacja pieniądza (nowo utworzony pieniądz):**
```
Kreacja = M - Baza początkowa
Kreacja = 10 000 - 1 000
Kreacja = 9 000 zł
```

---

#### Krok 4: Tabela pięciu rund

| Runda | Bank | Depozyt (D) | Rezerwa (R) | Kredyt (L) | Skumulowane depozyty |
|-------|------|-------------|-------------|------------|----------------------|
| 1 | A | 1 000,00 | 100,00 | 900,00 | 1 000,00 |
| 2 | B | 900,00 | 90,00 | 810,00 | 1 900,00 |
| 3 | C | 810,00 | 81,00 | 729,00 | 2 710,00 |
| 4 | D | 729,00 | 72,90 | 656,10 | 3 439,00 |
| 5 | E | 656,10 | 65,61 | 590,49 | 4 095,10 |
| ... | ... | ... | ... | ... | ... |
| ∞ | Suma | 10 000,00 | 1 000,00 | 9 000,00 | 10 000,00 |

**Obserwacje:**
- Każda runda tworzy 90% depozytu z poprzedniej rundy
- To ciąg geometryczny z ilorazem q = 0,9
- Suma: 1 000 / (1 - 0,9) = 1 000 / 0,1 = 10 000

---

#### Krok 5: Matematyczny dowód

**Suma depozytów:**
```
D_całkowite = D₁ + D₂ + D₃ + ...
D_całkowite = 1 000 + 900 + 810 + 729 + ...
D_całkowite = 1 000 × (1 + 0,9 + 0,9² + 0,9³ + ...)
```

**Suma ciągu geometrycznego:**
```
S = a / (1 - q), gdzie a = 1 000, q = 0,9
S = 1 000 / (1 - 0,9)
S = 1 000 / 0,1
S = 10 000 zł
```

---

#### Krok 6: Analiza przy r = 20%

**6.1. Nowy mnożnik:**
```
m_nowe = 1 / 0,20 = 5
```

**6.2. Maksymalna podaż pieniądza:**
```
M_nowe = 5 × 1 000 = 5 000 zł
```

**6.3. Porównanie:**
```
Spadek kreacji pieniądza = 10 000 - 5 000 = 5 000 zł (50%)
```

**6.4. Tabela porównawcza:**

| Runda | Rezerwa 10% | Rezerwa 20% | Różnica |
|-------|-------------|-------------|---------|
| 1 | 1 000 | 1 000 | 0 |
| 2 | 900 | 800 | -100 |
| 3 | 810 | 640 | -170 |
| 4 | 729 | 512 | -217 |
| 5 | 656 | 410 | -246 |
| ∞ | 10 000 | 5 000 | -5 000 |

---

#### Krok 7: Składniki podaży pieniądza

**7.1. Przy r = 10%:**
```
Pieniądz gotówkowy (baza): 0 (cała kwota w depozytach)
Depozyty: 10 000
Rezerwy bankowe: 1 000
Kredyty: 9 000
```

**Bilans systemu bankowego:**
```
Aktywa:                          Pasywa:
- Rezerwy: 1 000                 - Depozyty: 10 000
- Kredyty: 9 000
Suma: 10 000                     Suma: 10 000 ✓
```

---

**ODPOWIEDŹ:**

a) **Bank A może pożyczyć:** 900 zł
   - Otrzymuje depozyt 1 000 zł
   - Zatrzymuje rezerwy 100 zł (10%)
   - Pożycza 900 zł

b) **Bank B może pożyczyć:** 810 zł
   - Otrzymuje depozyt 900 zł
   - Zatrzymuje rezerwy 90 zł (10%)
   - Pożycza 810 zł

c) **Maksymalna kreacja pieniądza:** 9 000 zł
   - Początkowa baza: 1 000 zł
   - Końcowa podaż pieniądza: 10 000 zł
   - Nowo utworzony pieniądz: 9 000 zł

d) **Mnożnik pieniężny:** m = 10
   - Obliczony ze wzoru: m = 1/r = 1/0,10 = 10

e) **Tabela pierwszych 5 rund:** patrz Krok 4
   - Po 5 rundach depozyty wynoszą 4 095 zł
   - To około 41% maksymalnej kreacji

f) **Przy r = 20%:**
   - Mnożnik spada do 5 (z 10)
   - Maksymalna podaż pieniądza: 5 000 zł (z 10 000)
   - Kreacja pieniądza spada o 50%
   - Wyższa stopa rezerw = mniejsza kreacja pieniądza

**Kluczowe wnioski:**
1. System rezerw cząstkowych pozwala na kreację pieniądza przez banki komercyjne
2. Mnożnik pieniężny jest odwrotnością stopy rezerw
3. Niewielka zmiana stopy rezerw ma duży wpływ na podaż pieniądza
4. Jest to główny mechanizm, przez który bank centralny kontroluje podaż pieniądza

---

## Podsumowanie

Ten dokument zawiera **7 kategorii zadań** z **12 kompleksowymi przykładami** z zakresu makroekonomii:

1. **PKB i Wartość Dodana** - 2 zadania
2. **PKB Nominalny, Realny i Deflator** - 2 zadania
3. **Funkcja Konsumpcji i Oszczędności** - 2 zadania
4. **Mnożnik Keynesowski** - 2 zadania
5. **Równowaga Makroekonomiczna** - 1 zadanie
6. **Polityka Fiskalna** - 1 zadanie
7. **Kreacja Pieniądza** - 1 zadanie

Każde zadanie zawiera:
- ✅ Jasno sformułowaną treść
- ✅ Wyraźnie oznaczone dane wejściowe
- ✅ Szczegółowe rozwiązanie krok po kroku
- ✅ Wyjaśnienia ekonomiczne
- ✅ Weryfikacje obliczeń
- ✅ Interpretację wyników
- ✅ Wnioski praktyczne

---

**Jak korzystać z tego dokumentu:**

1. Najpierw przeczytaj zadanie i spróbuj rozwiązać samodzielnie
2. Porównaj swoje rozwiązanie z przedstawionym
3. Zwróć uwagę na logikę rozumowania w każdym kroku
4. Sprawdź interpretacje ekonomiczne
5. Ćwicz z podobnymi wariantami zadań

**Powodzenia w nauce makroekonomii!** 📈💰
