using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GravitacaoV2 : MonoBehaviour {

    [SerializeField] GameObject other;
    [SerializeField] float G;
    [SerializeField] float distancia;
    [SerializeField] Vector3 forcaAux;
    [SerializeField] Vector3 aceleracao;
    [SerializeField] Vector3 velAngular;
    [SerializeField] Vector3 aceleracaoDebug;
    [SerializeField] Vector3 magnus;
    Vector3 velocidade = new Vector3.zero;
    Vector3 posicaoInicial;
    Vector3 posicaoFinal;
    Rigidbody thisRB;
    Rigidbody otherRB;

    void Start() {

        thisRB = GetComponent<Rigidbody>();
        otherRB = other.GetComponent<Rigidbody>();
        otherRB.AddForce(aceleracao, ForceMode.VelocityChange);
        posicaoInicial = other.transform.position;
    }

    void FixedUpdate() {

        Gravitacao();

        magnus = Magnus();
        forcaAux += magnus;
        otherRB.AddForce(forcaAux, ForceMode.Impulse);
        posicaoFinal = other.transform.position;
        velocidade = (posicaoFinal - posicaoInicial) / Time.fixedDeltaTime;
        posicaoInicial = posicaoFinal;

        Rotaciona();
    }

    void Gravitacao() {

        distancia = Vector3.Distance(transform.position, other.transform.position);
        float forca = (G * thisRB.mass * otherRB.mass) / Mathf.Pow(distancia, 2);
        Vector3 direcao = transform.position - other.transform.position;
        forcaAux = forca * (direcao / direcao.magnitude);
    }

    void Rotaciona() {

        Vector3 rotacao = velAngular * Time.fixedDeltaTime;
        other.transform.Rotate(rotacao, Space.Self);
    }

    Vector3 Magnus() {

        Vector3 produtoVetorial = new Vector3(((velAngular.y * velocidade.z) - (velAngular.z * velocidade.y)),
                                             ((velAngular.z * velocidade.x) - (velAngular.x * velocidade.z)),
                                             ((velAngular.x * velocidade.y) - (velAngular.y * velocidade.x)));
        Vector3 resultante = 0.00041f * produtoVetorial;
        return resultante;
    }

}